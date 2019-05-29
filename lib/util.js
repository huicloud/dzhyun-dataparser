'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToArrayBuffer = stringToArrayBuffer;
exports.arrayBufferToString = arrayBufferToString;
var td = typeof TextDecoder !== 'undefined' ? new TextDecoder() : undefined;
var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && typeof importScripts === 'function';
var MAX_ARGUMENTS_LIMIT = isWebWorker ? 65535 / 2 : 65535;

function stringToArrayBuffer(str) {
  var strLen = str.length;
  var buf = new ArrayBuffer(strLen * 2); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i = 0; i < strLen; i += 1) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function arrayBufferToString(arrayBuffer) {
  if (td) {
    return td.decode(new Uint8Array(arrayBuffer));
  }
  var uint8Array = new Uint8Array(arrayBuffer);
  var length = uint8Array.length;
  if (length > MAX_ARGUMENTS_LIMIT) {
    var results = [];
    var start = 0;
    do {
      var subArray = uint8Array.subarray(start, start += MAX_ARGUMENTS_LIMIT);
      results.push(String.fromCharCode.apply(String, subArray)); // eslint-disable-line
    } while (start < length);

    return decodeURIComponent(escape(results.join('')));
  }
  return decodeURIComponent(escape(String.fromCharCode.apply(String, uint8Array))); // eslint-disable-line
}