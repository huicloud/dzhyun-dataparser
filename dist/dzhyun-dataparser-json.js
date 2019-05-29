(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DzhyunDataParser"] = factory();
	else
		root["DzhyunDataParser"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// empty (null-loader)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseJSON;

var _util = __webpack_require__(0);

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
    var json = typeof ArrayBuffer !== 'undefined' && input instanceof ArrayBuffer ? (0, _util.arrayBufferToString)(input) : input;
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uncompress;

var _snappy_decompressor = __webpack_require__(5);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snappyjsUncompress = __webpack_require__(3);

var _snappyjsUncompress2 = _interopRequireDefault(_snappyjsUncompress);

var _parseProtoBuf2 = __webpack_require__(1);

var _parseProtoBuf3 = _interopRequireDefault(_parseProtoBuf2);

var _parseJSON2 = __webpack_require__(2);

var _parseJSON3 = _interopRequireDefault(_parseJSON2);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DzhyunDataParser = function () {

  // options.compresser 压缩格式，默认不设置则根据数据自动判断，先直接解析数据失败了再解压后再次解析，
  // 'snappy'使用snappy压缩，解压时如果失败直接报错，false不使用压缩，直接解析数据失败直接报错
  // options.yfloat {bool} 是否将long类型数据做yfloat解析，默认不设置为true，设置为false则不解析, 不包括pbtable
  function DzhyunDataParser() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DzhyunDataParser);

    this.options = options;
  }

  _createClass(DzhyunDataParser, [{
    key: 'parse',
    value: function parse(input) {
      var _this = this;

      return Promise.resolve().then(function () {
        return _this.options.compresser === 'snappy' ? DzhyunDataParser.uncompress(input) : input;
      }).then(function (data) {
        if (DzhyunDataParser.isJSON(data)) {
          return DzhyunDataParser.parseJSON(data);
        } else if (_this.options.compresser === undefined) {
          // 默认自动判断压缩时，当解析pb失败后再次解压后再尝试解析
          return DzhyunDataParser.parseProtoBuf(data, _this.options.yfloat !== false).catch(function (e) {
            return DzhyunDataParser.uncompress(data).catch(function () {
              throw e;
            }).then(_this.parse.bind(_this));
          });
        }
        return DzhyunDataParser.parseProtoBuf(data, _this.options.yfloat !== false);
      });
    }
  }], [{
    key: 'parseProtoBuf',
    value: function parseProtoBuf(data, parseYfloat) {
      return typeof _parseProtoBuf3.default === 'function' ? (0, _parseProtoBuf3.default)(data, parseYfloat) : Promise.reject(new Error('no support parse protobuf data'));
    }
  }, {
    key: 'parseJSON',
    value: function parseJSON(data) {
      return typeof _parseJSON3.default === 'function' ? (0, _parseJSON3.default)(data) : Promise.reject(new Error('no support parse JSON data'));
    }
  }, {
    key: 'isJSON',
    value: function isJSON(data) {
      var first = void 0;
      if (typeof data === 'string') {
        first = data.charCodeAt(0);
      } else if (data instanceof ArrayBuffer) {
        first = new Uint8Array(data)[0];
      }
      return first === 123;
    }
  }, {
    key: 'uncompress',
    value: function uncompress(data) {
      return Promise.resolve().then(function () {
        var result = data;
        if (typeof _snappyjsUncompress2.default !== 'function') throw new Error('no support snappy uncompress');
        if (typeof data === 'string') {
          result = (0, _util.stringToArrayBuffer)(result);
          result = (0, _snappyjsUncompress2.default)(result);
        } else {
          result = (0, _snappyjsUncompress2.default)(result);
        }
        return result;
      });
    }
  }]);

  return DzhyunDataParser;
}();

module.exports = DzhyunDataParser;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The MIT License (MIT)
//
// Copyright (c) 2016 Zhipeng Jia
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



var WORD_MASK = [0, 0xff, 0xffff, 0xffffff, 0xffffffff]

function copyBytes (from_array, from_pos, to_array, to_pos, length) {
  var i
  for (i = 0; i < length; i++) {
    to_array[to_pos + i] = from_array[from_pos + i]
  }
}

function selfCopyBytes (array, pos, offset, length) {
  var i
  for (i = 0; i < length; i++) {
    array[pos + i] = array[pos - offset + i]
  }
}

function SnappyDecompressor (compressed) {
  this.array = compressed
  this.pos = 0
}

SnappyDecompressor.prototype.readUncompressedLength = function () {
  var result = 0
  var shift = 0
  var c, val
  while (shift < 32 && this.pos < this.array.length) {
    c = this.array[this.pos]
    this.pos += 1
    val = c & 0x7f
    if (((val << shift) >>> shift) !== val) {
      return -1
    }
    result |= val << shift
    if (c < 128) {
      return result
    }
    shift += 7
  }
  return -1
}

SnappyDecompressor.prototype.uncompressToBuffer = function (out_buffer) {
  var array = this.array
  var array_length = array.length
  var pos = this.pos
  var out_pos = 0

  var c, len, small_len
  var offset

  while (pos < array.length) {
    c = array[pos]
    pos += 1
    if ((c & 0x3) === 0) {
      // Literal
      len = (c >>> 2) + 1
      if (len > 60) {
        if (pos + 3 >= array_length) {
          return false
        }
        small_len = len - 60
        len = array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
        len = (len & WORD_MASK[small_len]) + 1
        pos += small_len
      }
      if (pos + len > array_length) {
        return false
      }
      copyBytes(array, pos, out_buffer, out_pos, len)
      pos += len
      out_pos += len
    } else {
      switch (c & 0x3) {
        case 1:
          len = ((c >>> 2) & 0x7) + 4
          offset = array[pos] + ((c >>> 5) << 8)
          pos += 1
          break
        case 2:
          if (pos + 1 >= array_length) {
            return false
          }
          len = (c >>> 2) + 1
          offset = array[pos] + (array[pos + 1] << 8)
          pos += 2
          break
        case 3:
          if (pos + 3 >= array_length) {
            return false
          }
          len = (c >>> 2) + 1
          offset = array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
          pos += 4
          break
        default:
          break
      }
      if (offset === 0 || offset > out_pos) {
        return false
      }
      selfCopyBytes(out_buffer, out_pos, offset, len)
      out_pos += len
    }
  }
  return true
}

exports.SnappyDecompressor = SnappyDecompressor


/***/ })
/******/ ]);
});
//# sourceMappingURL=dzhyun-dataparser-json.js.map