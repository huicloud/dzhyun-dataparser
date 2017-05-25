'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * pb table格式数据转换模块
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dzhyunProto = require('./dzhyunProto');

var _dzhyunProto2 = _interopRequireDefault(_dzhyunProto);

var _yfloat = require('./yfloat');

var _yfloat2 = _interopRequireDefault(_yfloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 列类型枚举 */
var InfoType = void 0;
try {
  InfoType = _dzhyunProto2.default.lookupEnum('dzhyun.InfoType').values;
} catch (e) {
  InfoType = {
    Type_Int: 105,
    Type_Float: 102,
    Type_Double: 100,
    Type_String: 115,
    Type_Binary: 98,
    Type_Table: 116,
    Type_SInt: 120,
    Type_Unknow: 0
  };
}

/** 各种列类型对应数据字段前缀 */
var cDataFieldPrefix = {};
cDataFieldPrefix[InfoType.Type_Int] = 'i';
cDataFieldPrefix[InfoType.Type_Float] = 'f';
cDataFieldPrefix[InfoType.Type_Double] = 'd';
cDataFieldPrefix[InfoType.Type_String] = 's';
cDataFieldPrefix[InfoType.Type_Binary] = 'b';
cDataFieldPrefix[InfoType.Type_Table] = 't';
cDataFieldPrefix[InfoType.Type_SInt] = 'x';

/** table信息缓存，多次推送数据时只有第一次会有table信息，所以需要做缓存 */
var tableInfoCache = {};

var PbTableConverter = function () {
  /**
   * pbTable数据转换器类型
   * @param {?{filter: {function}}} options 可以设置一个filter函数对所有解析的数据都会调用该方法，
   *        返回true保留数据，false丢弃数据，返回其它类型数据则将其替换
   * @constructor
   */
  function PbTableConverter(options) {
    _classCallCheck(this, PbTableConverter);

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


  _createClass(PbTableConverter, [{
    key: '_getColumnDataValues',
    value: function _getColumnDataValues(columnData, columnType) {

      // 非未知类型直接取类型的字段值
      if (columnType !== InfoType.Type_Unknow) {
        var fieldName = cDataFieldPrefix[columnType] + 'Values';
        return columnData[fieldName];
      }

      // 对于未知类型则按顺序找到第一个不为空的数据字段值
      return columnData.iValues || columnData.fValues || columnData.dValues || columnData.sValues || columnData.bValues || columnData.tValues || columnData.xValues;
    }

    /**
     * 恢复数据值
     * @param {number} columnType
     * @param {number} columnRatio
     * @returns {*}
     * @private
     */

  }, {
    key: '_retrieveValue',
    value: function _retrieveValue(columnType, columnRatio) {
      var _this = this;

      if (columnType === InfoType.Type_Table) {
        return function (value, rowIndex) {
          return _this.convert(value, rowIndex === 0);
        };
      } else if ((columnType === InfoType.Type_Int || columnType === InfoType.Type_SInt) && !!columnRatio) {

        // 对于整型数据，根据radio将数据还原（第一行数据跳过，不处理）
        return function (value, rowIndex) {
          return rowIndex !== 0 ? value * columnRatio : value;
        };
      }
      return function (value) {
        return value;
      };
    }

    /**
     * 转换列数据
     * @param {Object} columnData 指定的一列的数据 CData|CDataX
     * @param {?Object} columnInfo 对应的该列的列信息 CInfo
     * @param {!Array.<Object>} resultArray 存放转换后数据的数组
     * @throws {Error}
     * @private
     */

  }, {
    key: '_convertColumn',
    value: function _convertColumn(columnData) {
      var columnInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var resultArray = arguments[2];

      var index = columnData.Index;

      // 列信息中名称不存在时，列名使用列下标
      var columnName = columnInfo.Name || index;

      // 列信息中类型不存在时，列类型取未知
      var columnType = columnInfo.Type || InfoType.Type_Unknow;

      var columnRatio = columnInfo.Ratio;

      var values = this._getColumnDataValues(columnData, columnType);

      // 如果对应列数据为空则抛出错误
      if (values == null) {
        throw new Error('column ' + index + ' data is null');
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

  }, {
    key: '_columnToRow',
    value: function _columnToRow(columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {
      var retrieveValue = this._retrieveValue(columnType, columnRatio);
      var previousValue = 0;
      var dq = void 0;
      var w = void 0;
      columnValues.forEach(function (value, rowIndex) {

        // 对应结果行数据不存在则创建
        var row = resultArray[rowIndex];
        if (row === undefined) {
          row = {};
          resultArray.push(row);
        }

        // 恢复数据值
        var result = retrieveValue(value, rowIndex);

        // 对于Type_SInt类型，按照差分还原
        if (columnType === InfoType.Type_SInt) {

          // 第一次记录精度
          if (dq === undefined) {
            var arr = _yfloat2.default.unmakeValue(result);
            previousValue = arr[0];
            dq = arr[1];
            w = Math.pow(10, dq);
          } else {
            // result = result.toNumber ? result.toNumber() : result;
            previousValue = Number((previousValue + result / w).toFixed(dq));
          }
          row[columnName] = previousValue;
        } else if (columnType === InfoType.Type_Int) {

          // 对于Type_Int类型数据转换yfloat
          row[columnName] = _yfloat2.default.unmakeValueToNumber(result);
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

  }, {
    key: 'convert',
    value: function convert(pbTable, isFirstRow) {
      var _this2 = this;

      // 得到table列信息
      var tableInfoId = pbTable.Tiid;
      var tableInfo = pbTable.Info;

      // table信息不存在则从堆栈或者全局缓存中查找对应table信息
      if (!tableInfo || tableInfo.length === 0) {
        var length = this._tableInfoStack.length;
        tableInfo = isFirstRow === false && length > 0 ? this._tableInfoStack[length] : tableInfoCache[tableInfoId];
      } else {

        // 第一行的tableInfo信息放入堆栈
        if (isFirstRow === true) this._tableInfoStack.push(tableInfo);
        tableInfoCache[tableInfoId] = tableInfo;
      }

      // 定义出最后的转换结果数组
      var jsonArray = [];

      // 转换table数据
      var tableData = pbTable.Data || pbTable.DataX;
      if (tableData) {
        tableData.forEach(function (columnData) {
          var columnIndex = columnData.Index;

          // 从table信息中得到该列对应的column信息，column信息可能不存在
          var columnInfo = tableInfo ? tableInfo[columnIndex] : null;
          _this2._convertColumn(columnData, columnInfo, jsonArray);
        });
      } else {
        throw new Error('table data undefined');
      }

      return jsonArray;
    }
  }]);

  return PbTableConverter;
}();

exports.default = {

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convertToJsonArray: function convertToJsonArray(pbTable, options) {
    return new PbTableConverter(options).convert(pbTable);
  }
};