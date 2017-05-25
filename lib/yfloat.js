'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-bitwise */
/**
 * yfloat格式数据的解析模块
 * Created by jiagang on 2015/10/15.
 */

var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * 得到value中高32位数值
 * @param {number} value
 * @returns {number}
 */
function getHighBits(value) {
  return value / TWO_PWR_32_DBL | 0;
}

/**
 * 得到value中低32位数值
 * @param {number} value
 * @returns {number}
 */
function getLowBits(value) {
  return value % TWO_PWR_32_DBL | 0;
}

/**
 * 高位和低位合并为一个数字
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
function toNumber(low, high) {
  return (high >>> 0) * TWO_PWR_32_DBL + (low >>> 0);
}

/**
 * 解析yfloat类型数字，返回数值和精度的数组
 * @param {number|Long} value
 * @returns {Array}
 */
function unmakeValue(value) {
  var high = void 0;
  var low = void 0;

  // 数字类型
  if (typeof value === 'number' && value >= 0) {
    high = getHighBits(value);
    low = getLowBits(value);
  } else if (value && typeof value.getHighBits === 'function' && typeof value.getLowBits === 'function') {

    // Long型
    high = value.getHighBits();
    low = value.getLowBits();
  } else {

    // 其它类型不支持
    console.warn('unmakeValue: invalid value');
    return [NaN, 0];
  }

  var b = low >> 16 & 0xFF;
  var l = b & 0x0F;
  var h = b >> 4 & 0x0F;
  var bx = toNumber((high << 24) + (low >>> 24 << 16) + (low & 0xFFFF), high >> 8);
  var dq = [2, 1, null, 3, 4, 5, 6, 7, 8, 9, 0][l];
  var temp = dq !== null ? bx / (Math.pow(10, dq) || 1) : NaN;

  if (h !== 0) {
    temp = -temp;
  }
  return [temp, dq];
}

/**
 * 解析yfloat类型数字，返回数字类型
 * @param {number|Long} value
 * @returns {number}
 */
function unmakeValueToNumber(value) {
  return unmakeValue(value)[0];
}

/**
 * 解析yfloat类型数字，返回根据精度格式化后的字符串
 * @param {number|Long} value
 * @returns {string}
 */
function unmakeValueToString(value) {
  var result = unmakeValue(value);
  var resultValue = result[0];
  var dq = result[1];
  return dq !== null ? resultValue.toFixed(dq) : resultValue.toString();
}

exports.default = { unmakeValue: unmakeValue, unmakeValueToNumber: unmakeValueToNumber, unmakeValueToString: unmakeValueToString };