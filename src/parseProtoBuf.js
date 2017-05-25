import origConverter from 'protobufjs/src/converter';
import converter from './protobufjs-converter';

import root from './dzhyunProto';
import pbTable from './pbTable';
import yfloat from './yfloat';
import { stringToArrayBuffer } from './util';

// 替换原模块中的方法
Object.assign(origConverter, converter);

const UAResponse = root.lookupType('dzhyun.UAResponse');
const MSG = root.lookupType('dzhyun.MSG');

export default function parseProtoBuf(input, parseYfloat) {
  return Promise.resolve().then(() => {
    const buffer = (typeof input === 'string') ? stringToArrayBuffer(input) : input;
    const array = new Uint8Array(buffer);
    const responseMessage = UAResponse.decode(array);

    // 错误消息直接返回，正确的数据消息再解析其中的Data
    if (responseMessage.Err !== 0) {
      const result = responseMessage.toObject();
      if (result.Data) result.Data = JSON.parse(String.fromCharCode(...result.Data));
      return result;
    }
    const dataMessage = MSG.decode(responseMessage.Data);
    let data;

    // 如果数据是pbtable格式，做pbtable转array，否则将其直接转object（转yfloat解析）
    if (dataMessage.Tbl) {
      const tbl = pbTable.convertToJsonArray(dataMessage.Tbl);
      const key = Object.keys(tbl[0])[0];
      const value = tbl[0][key];
      data = {
        Id: dataMessage.Id,
        [key]: value,
      };
    } else {
      data = dataMessage.toObject(parseYfloat ? {
        longs: yfloat.unmakeValueToNumber,
      } : undefined);
    }
    return {
      Qid: responseMessage.Qid,
      Err: responseMessage.Err,
      Counter: responseMessage.Counter,
      Data: data,
    };
  });
}
