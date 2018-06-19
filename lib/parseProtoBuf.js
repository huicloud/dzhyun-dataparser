'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseProtoBuf;

var _converter = require('protobufjs/src/converter');

var _converter2 = _interopRequireDefault(_converter);

var _protobufjsConverter = require('./protobufjs-converter');

var _protobufjsConverter2 = _interopRequireDefault(_protobufjsConverter);

var _dzhyunProto = require('./dzhyunProto');

var _dzhyunProto2 = _interopRequireDefault(_dzhyunProto);

var _pbTable = require('./pbTable');

var _pbTable2 = _interopRequireDefault(_pbTable);

var _yfloat = require('./yfloat');

var _yfloat2 = _interopRequireDefault(_yfloat);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 替换原模块中的方法
Object.assign(_converter2.default, _protobufjsConverter2.default);

var UAResponse = _dzhyunProto2.default.lookupType('dzhyun.UAResponse');
var MSG = _dzhyunProto2.default.lookupType('dzhyun.MSG');

function parseProtoBuf(input, parseYfloat) {
  return Promise.resolve().then(function () {
    var buffer = typeof input === 'string' ? (0, _util.stringToArrayBuffer)(input) : input;
    var array = new Uint8Array(buffer);
    var responseMessage = UAResponse.decode(array);

    // 错误消息直接返回，正确的数据消息再解析其中的Data
    if (responseMessage.Err !== 0) {
      var result = UAResponse.toObject(responseMessage);
      if (result.Data) result.Data = JSON.parse(String.fromCharCode.apply(String, result.Data));
      return result;
    }
    var dataMessage = MSG.decode(responseMessage.Data);
    var data = void 0;

    // 如果数据是pbtable格式，做pbtable转array，否则将其直接转object（转yfloat解析）
    if (dataMessage.Tbl) {
      var tbl = _pbTable2.default.convertToJsonArray(dataMessage.Tbl);
      var key = Object.keys(tbl[0])[0];
      var value = tbl[0][key];
      data = _defineProperty({
        Id: dataMessage.Id
      }, key, value);
    } else {
      data = MSG.toObject(dataMessage, parseYfloat ? {
        longs: _yfloat2.default.unmakeValueToNumber
      } : undefined);
    }
    return {
      Qid: responseMessage.Qid,
      Err: responseMessage.Err,
      Counter: responseMessage.Counter,
      Data: data
    };
  });
}