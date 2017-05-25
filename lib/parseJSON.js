'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseJSON;

var _util = require('./util');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function convertToJsonArray(input) {
  if (!input || !input.head) return input;

  var head = input.head;
  var data = input.data;

  return data.map(function (row) {
    var rowObject = {};
    row.forEach(function (cell, columnIndex) {
      rowObject[head[columnIndex]] = convertToJsonArray(cell);
    });
    return rowObject;
  });
}

function parseJSON(input) {
  return Promise.resolve().then(function () {
    var json = input instanceof ArrayBuffer ? (0, _util.arrayBufferToString)(input) : input;
    var response = JSON.parse(json);
    if (response.Err !== 0) {
      return response;
    }

    var data = response.Data;
    if (data.JsonTbl) {
      var tbl = convertToJsonArray(data.JsonTbl);
      var key = Object.keys(tbl[0])[0];
      var value = tbl[0][key];
      data = _defineProperty({
        Id: data.Id
      }, key, value);
    }

    return {
      Qid: response.Qid,
      Err: response.Err,
      Counter: response.Counter,
      Data: data
    };
  });
}