const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const protobuf = require('protobufjs');
const jsonTarget = require('protobufjs/cli/targets/json-module');

// 大智慧云服务接口对应的proto对应表(常用的接口)
const dzhyunServiceMap = {
  '/stkdata': ['dzhyun.stkdata.proto'],
  '/quote/min': ['dzhoutput.proto', 'dzhpbtable.proto'],
  '/quote/kline': ['dzhoutput.proto', 'dzhpbtable.proto'],
  '/quote/dyna': ['dzhoutput.proto'],
  '/quote/tick': ['dzhoutput.proto', 'dzhpbtable.proto'],
  '/quote/report': ['dzhoutput.proto', 'dzhpbtable.proto'],
  '/quote/queue': ['dzhoutput.proto'],
  '/kbspirit': ['dzhyun.jianpanbao.proto'],
  '/news/stock_v2': ['CldNewsShuJu.proto'],
  '/news/center_v2': ['CldNewsShuJu.proto'],
  '/announcemt/center_v2': ['CldNewsShuJu.proto'],
  '/announcemt/stock_v2': ['CldNewsShuJu.proto'],
  '/self/news': ['CldNewsShuJu.proto'],
  '/self/announcemt': ['CldNewsShuJu.proto'],
  '/report/stock': ['CldNewsShuJu.proto'],
  '/report/center': ['CldNewsShuJu.proto'],
  '/self/report': ['CldNewsShuJu.proto'],
  '/mobile/news': ['CldNewsShuJu.proto'],
  '/block/obj': ['dzh.block.proto'],
  '/block/prop': ['dzh.block.proto'],
  '/blockstat': ['dzhyun.blockstatistics.proto'],
  '/indicator/calc': ['dzhyun.zhibiao.proto'],
};
const serviceRegExp = new RegExp(`(?:(${Object.keys(dzhyunServiceMap).join(')|(')}))`, 'g');
const protoCache = {};

// 默认根据代码使用，可以在webpack编译打包时将依赖的pb结构尽可能的简化，减小打包后文件的大小，参数pb=false表示不使用pb格式，打包时将pb相关完全去掉，compress=false表示不使用压缩，会将解压相关依赖去除
class DzhyunDataParserPlugin {
  constructor(options) {
    this.options = Object.assign({
      compress: true,
      pb: true,
      json: true,

      // bool|object
      filterProto: false,
    }, options);
  }

  apply(compiler) {

    // 使用NormalModuleReplacementPlugin时正则中匹配.js的话会在after-resolve时触发
    // before-resolve时触发的话还未解析模块，request用作查找模块，
    // after-resolve时触发的话，模块依赖已经完成，request会修改为loader加载处理后的名称，名称相同的模块会认为是相同的模块
    // 因此在after-resolve时将request修改为相同的名称，可以使得后面依赖的模块直接使用之前已经解析后的名称的模块，
    // src中的protobufjs-converter.js会经过babel编译，之后将protobufjs中的converter.js模块替换为编译后的protobufjs-converter.js
    // TODO 需要验证是否会出现顺序问题使之处理反过来导致protobufjs-converter.js未babel编译，即使不编译应该也没有问题，这个替换的目的只是为了减少一个依赖文件，减小打包文件的大小
    compiler.apply(new webpack.NormalModuleReplacementPlugin(/protobufjs-converter\.js$/, (resource) => {
      resource.request = path.resolve(__dirname, 'lib/protobufjs-converter.js');
    }));
    compiler.apply(new webpack.NormalModuleReplacementPlugin(/protobufjs\/src\/converter\.js$/, (resource) => {
      resource.request = path.resolve(__dirname, 'lib/protobufjs-converter.js');

      // 确保如果顺序问题，这里先执行的话，修改resource能保证依赖到需要替换的文件
      resource.resource = path.resolve(__dirname, 'lib/protobufjs-converter.js');
    }));

    // 修改options中的rules，根据设置使用null-loader加载空模块替换对应的功能模块
    const rules = compiler.options.module.rules || [];
    if (!this.options.pb) {
      rules.push({
        test: /parseProtoBuf\.js$/,
        use: 'null-loader',
      });
    }
    if (!this.options.json) {
      rules.push({
        test: /parseJSON\.js$/,
        use: 'null-loader',
      });
    }
    if (!this.options.compress) {
      rules.push({
        test: /snappyjs-uncompress\.js$/,
        use: 'null-loader',
      });
    }
    compiler.options.module.rules = rules;

    const filterProto = this.options.filterProto;
    if (filterProto) {
      compiler.plugin('compilation', (compilation) => {

        // 优化模块时从所有模块代码中将使用的服务接口找出来，根据使用的接口对应的proto修改MSG.proto，
        // 保留使用的proto，其它依赖的proto移除，再编译proto为json module后替换原dzhyunProto.js模块的内容
        compilation.plugin('optimize-modules', (modules) => {
          let dzhyunProtoModule;
          const serviceSet = new Set(filterProto.services || []);
          modules.forEach((module) => {
            let source;
            if (module.resource && module.resource.indexOf('dzhyunProto.js') > 0) dzhyunProtoModule = module;
            else if (module._source) {
              source = module._source.source();
            } else if (module.sourceStr) {
              source = module.sourceStr;
            }
            if (source) {
              let match;
              while (match = serviceRegExp.exec(source)) {
                match.slice(1).forEach(service => service && serviceSet.add(service));
              }
            }
          });

          if (dzhyunProtoModule) {
            const protos = Array.from(new Set([].concat(filterProto.protos || [], ...Array.from(serviceSet).map((service) => {
              return dzhyunServiceMap[service];
            })))).sort();

            // 判断缓存
            const key = protos.join('|');
            let protoSource = protoCache[key];
            if (!protoSource) {

              // 读取MSG.proto文件后根据protos做筛选处理
              let msgContent = fs.readFileSync(path.resolve(__dirname, './proto/MSG.proto'), 'utf8');

              // 首先去掉EnumID定义，并且给Table列添加一行注释，使之与dzhpbtable.proto关联
              msgContent = msgContent.replace(/enum EnumID{[^}]*}/, '').replace('Table Tbl = 3;', 'Table Tbl = 3; // file:dzhpbtable.proto,');

              // 按行分割后判断是否要保留
              msgContent = msgContent.split('\n').filter((line) => {
                const match = line.match(/(?:import "([^"]*)";|file:(.*proto),)/);
                return !match || protos.indexOf(match[1] || match[2]) >= 0;
              }).join('\n');

              // 编译pbjs
              const root = new protobuf.Root();
              root.loadSync(path.resolve(__dirname, './proto/dzhua.proto'));
              const parsed = protobuf.parse(msgContent, root);
              if (parsed.imports) {
                parsed.imports.forEach((name) => {
                  const absolutePath = path.resolve(__dirname, './proto', name);
                  root.loadSync(absolutePath);
                });
              }

              // json-module中使用process.nextTick，在下一次执行事件周期执行回调导致异步处理，将nextTick修改使之变成同步返回数据
              const nextTick = process.nextTick;
              process.nextTick = callback => callback();
              jsonTarget(root, { wrap: 'commonjs', lint: '' }, (err, output) => {
                if (!err) {
                  protoSource = output;
                }
              });
              process.nextTick = nextTick;
              protoCache[key] = protoSource;
            }

            // 替换模块源码
            dzhyunProtoModule._source = dzhyunProtoModule.createSource(protoSource);
          }
        });
      });
    }
  }
}
module.exports = DzhyunDataParserPlugin;
