'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uncompress;

var _snappy_decompressor = require('snappyjs/snappy_decompressor');

function uncompress(compressed) {
  if (!(compressed instanceof ArrayBuffer)) {
    throw new TypeError('Argument compressed must be type of ArrayBuffer');
  }

  var decompressor = new _snappy_decompressor.SnappyDecompressor(new Uint8Array(compressed));
  var length = decompressor.readUncompressedLength();
  if (length === -1) {
    throw new Error('Invalid Snappy bitstream');
  }
  var uncompressed = new ArrayBuffer(length);
  var uncompressedView = new Uint8Array(uncompressed);
  if (!decompressor.uncompressToBuffer(uncompressedView)) {
    throw new Error('Invalid Snappy bitstream');
  }
  return uncompressed;
}