import uncompress from './snappyjs-uncompress';
import parseProtoBuf from './parseProtoBuf';
import parseJSON from './parseJSON';
import { stringToArrayBuffer } from './util';

class DzhyunDataParser {

  // options.compresser 压缩格式，默认不设置则根据数据自动判断，先直接解析数据失败了再解压后再次解析，
  // 'snappy'使用snappy压缩，解压时如果失败直接报错，false不使用压缩，直接解析数据失败直接报错
  // options.yfloat {bool} 是否将long类型数据做yfloat解析，默认不设置为true，设置为false则不解析, 不包括pbtable
  constructor(options = {}) {
    this.options = options;
  }

  parse(input) {
    return Promise.resolve()
      .then(() => (this.options.compresser === 'snappy' ? DzhyunDataParser.uncompress(input) : input))
      .then((data) => {
        if (DzhyunDataParser.isJSON(data)) {
          return DzhyunDataParser.parseJSON(data);
        } else if (this.options.compresser === undefined) {
          // 默认自动判断压缩时，当解析pb失败后再次解压后再尝试解析
          return DzhyunDataParser.parseProtoBuf(data, this.options.yfloat !== false)
            .catch(e => DzhyunDataParser.uncompress(data)
              .catch(() => { throw e; })
              .then(this.parse.bind(this)));
        }
        return DzhyunDataParser.parseProtoBuf(data, this.options.yfloat !== false);
      });
  }

  static parseProtoBuf(data, parseYfloat) {
    return typeof parseProtoBuf === 'function' ? parseProtoBuf(data, parseYfloat) : Promise.reject(new Error('no support parse protobuf data'));
  }

  static parseJSON(data) {
    return typeof parseJSON === 'function' ? parseJSON(data) : Promise.reject(new Error('no support parse JSON data'));
  }

  static isJSON(data) {
    let first;
    if (typeof data === 'string') {
      first = data.charCodeAt(0);
    } else if (data instanceof ArrayBuffer) {
      first = new Uint8Array(data)[0];
    }
    return first === 123;
  }

  static uncompress(data) {
    return Promise.resolve().then(() => {
      let result = data;
      if (typeof uncompress !== 'function') throw new Error('no support snappy uncompress');
      if (typeof data === 'string') {
        result = stringToArrayBuffer(result);
        result = uncompress(result);
      } else {
        result = uncompress(result);
      }
      return result;
    });
  }
}
module.exports = DzhyunDataParser;
