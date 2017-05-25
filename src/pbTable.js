/**
 * pb table格式数据转换模块
 */
import root from './dzhyunProto';
import yfloat from './yfloat';

/** 列类型枚举 */
let InfoType;
try {
  InfoType = root.lookupEnum('dzhyun.InfoType').values;
} catch (e) {
  InfoType = {
    Type_Int: 105,
    Type_Float: 102,
    Type_Double: 100,
    Type_String: 115,
    Type_Binary: 98,
    Type_Table: 116,
    Type_SInt: 120,
    Type_Unknow: 0,
  };
}

/** 各种列类型对应数据字段前缀 */
const cDataFieldPrefix = {};
cDataFieldPrefix[InfoType.Type_Int] = 'i';
cDataFieldPrefix[InfoType.Type_Float] = 'f';
cDataFieldPrefix[InfoType.Type_Double] = 'd';
cDataFieldPrefix[InfoType.Type_String] = 's';
cDataFieldPrefix[InfoType.Type_Binary] = 'b';
cDataFieldPrefix[InfoType.Type_Table] = 't';
cDataFieldPrefix[InfoType.Type_SInt] = 'x';

/** table信息缓存，多次推送数据时只有第一次会有table信息，所以需要做缓存 */
const tableInfoCache = {};

class PbTableConverter {
  /**
   * pbTable数据转换器类型
   * @param {?{filter: {function}}} options 可以设置一个filter函数对所有解析的数据都会调用该方法，
   *        返回true保留数据，false丢弃数据，返回其它类型数据则将其替换
   * @constructor
   */
  constructor(options) {
    this.options = options || {};
    this._tableInfoStack = [];
  }

  /**
   * 根据列的类型取得具体列数据中对应字段的数据值
   * @param {Object} columnData
   * @param {number} columnType
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _getColumnDataValues(columnData, columnType) {

    // 非未知类型直接取类型的字段值
    if (columnType !== InfoType.Type_Unknow) {
      const fieldName = `${cDataFieldPrefix[columnType]}Values`;
      return columnData[fieldName];
    }

    // 对于未知类型则按顺序找到第一个不为空的数据字段值
    return columnData.iValues || columnData.fValues || columnData.dValues ||
      columnData.sValues || columnData.bValues || columnData.tValues || columnData.xValues;
  }

  /**
   * 恢复数据值
   * @param {number} columnType
   * @param {number} columnRatio
   * @returns {*}
   * @private
   */
  _retrieveValue(columnType, columnRatio) {
    if (columnType === InfoType.Type_Table) {
      return (value, rowIndex) => this.convert(value, rowIndex === 0);
    } else if ((columnType === InfoType.Type_Int ||
      columnType === InfoType.Type_SInt) && !!columnRatio) {

      // 对于整型数据，根据radio将数据还原（第一行数据跳过，不处理）
      return (value, rowIndex) => (rowIndex !== 0 ? value * columnRatio : value);
    }
    return value => value;
  }

  /**
   * 转换列数据
   * @param {Object} columnData 指定的一列的数据 CData|CDataX
   * @param {?Object} columnInfo 对应的该列的列信息 CInfo
   * @param {!Array.<Object>} resultArray 存放转换后数据的数组
   * @throws {Error}
   * @private
   */
  _convertColumn(columnData, columnInfo = {}, resultArray) {
    const index = columnData.Index;

    // 列信息中名称不存在时，列名使用列下标
    const columnName = columnInfo.Name || index;

    // 列信息中类型不存在时，列类型取未知
    const columnType = columnInfo.Type || InfoType.Type_Unknow;

    const columnRatio = columnInfo.Ratio;

    const values = this._getColumnDataValues(columnData, columnType);

    // 如果对应列数据为空则抛出错误
    if (values == null) {
      throw new Error(`column ${index} data is null`);
    }

    this._columnToRow(values, index, columnName, columnType, columnRatio, resultArray);
  }

  /**
   * 列数据转为行数据
   * @param columnValues
   * @param columnIndex
   * @param columnName
   * @param columnType
   * @param columnRatio
   * @param resultArray
   * @private
   */
  _columnToRow(columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {
    const retrieveValue = this._retrieveValue(columnType, columnRatio);
    let previousValue = 0;
    let dq;
    let w;
    columnValues.forEach((value, rowIndex) => {

      // 对应结果行数据不存在则创建
      let row = resultArray[rowIndex];
      if (row === undefined) {
        row = {};
        resultArray.push(row);
      }

      // 恢复数据值
      const result = retrieveValue(value, rowIndex);

      // 对于Type_SInt类型，按照差分还原
      if (columnType === InfoType.Type_SInt) {

        // 第一次记录精度
        if (dq === undefined) {
          const arr = yfloat.unmakeValue(result);
          previousValue = arr[0];
          dq = arr[1];
          w = 10 ** dq;
        } else {
          // result = result.toNumber ? result.toNumber() : result;
          previousValue = Number((previousValue + (result / w)).toFixed(dq));
        }
        row[columnName] = previousValue;
      } else if (columnType === InfoType.Type_Int) {

        // 对于Type_Int类型数据转换yfloat
        row[columnName] = yfloat.unmakeValueToNumber(result);
      } else {
        row[columnName] = result;
      }
    });

    // 一列转换完成后将tableInfoStack中最后一个数据移除堆栈
    this._tableInfoStack.pop();
  }

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {?boolean} isFirstRow 转换的pbTable数据是否是嵌套table转换数据的第一行
   *        第一行则要记录tableInfo，非第一行则不记录，避免堆栈数据重复
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convert(pbTable, isFirstRow) {

    // 得到table列信息
    const tableInfoId = pbTable.Tiid;
    let tableInfo = pbTable.Info;

    // table信息不存在则从堆栈或者全局缓存中查找对应table信息
    if (!tableInfo || tableInfo.length === 0) {
      const length = this._tableInfoStack.length;
      tableInfo = isFirstRow === false && length > 0 ?
        this._tableInfoStack[length] : tableInfoCache[tableInfoId];
    } else {

      // 第一行的tableInfo信息放入堆栈
      if (isFirstRow === true) this._tableInfoStack.push(tableInfo);
      tableInfoCache[tableInfoId] = tableInfo;
    }

    // 定义出最后的转换结果数组
    const jsonArray = [];

    // 转换table数据
    const tableData = pbTable.Data || pbTable.DataX;
    if (tableData) {
      tableData.forEach((columnData) => {
        const columnIndex = columnData.Index;

        // 从table信息中得到该列对应的column信息，column信息可能不存在
        const columnInfo = tableInfo ? tableInfo[columnIndex] : null;
        this._convertColumn(columnData, columnInfo, jsonArray);
      });
    } else {
      throw new Error('table data undefined');
    }

    return jsonArray;
  }
}

export default {

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convertToJsonArray(pbTable, options) {
    return new PbTableConverter(options).convert(pbTable);
  },
  //
  // /**
  //  * 将传入的pbTable格式数据转换成行列结构的二维数组
  //  * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
  //  * @param {Object=} options 选项
  //  * @throws {Error}
  //  * @return {Array.<Array.<*>>} 转换后的标准json对象数组
  //  */
  // convertToJsonTable(pbTable, options) {
  //   const converter = new PbTableConverter(options);
  //
  //   // eslint-disable-next-line no-underscore-dangle
  //   converter._columnToRow = function _columnToRow(columnValues, columnIndex, columnName,
  //     columnType, columnRatio, resultArray) {
  //
  //     // 上一个数据值，用作差分类型计算
  //     let previousValue = 0;
  //     columnValues.forEach((value, rowIndex) => {
  //
  //       // 对应结果行数据不存在则创建
  //       let row = resultArray[rowIndex];
  //       if (row === undefined) {
  //         row = [];
  //         resultArray.push(row);
  //       }
  //       previousValue = this._retrieveValue(value, previousValue, columnType, columnRatio);
  //       row.push(previousValue);
  //     });
  //   };
  //   return converter.convert(pbTable);
  // },
};
