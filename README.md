大智慧云平台数据解析模块
---
可以将云平台返回的protobuf格式和json格式的数据统一解析成相同格式的js对象

### 使用
1、global

    <script src="dist/dzhyun-dataparser.min.js"></script>
    <script>
      var parser = new DzhyunDataParser();
      
      // data 为调用云平台接口返回的数据
      parser.parse(data).then(function(result) { // 解析成功
        ...
      }).catch(function(error) { // 解析失败
        ...
      });
    </script>

2、模块化

安装

    npm install dzhyun-dataparser

使用

    import DzhyunDataParser from 'dzhyun-dataparser';
    ...

### API

##### 创建实例
new DzhyunDataParser({ compresser: 'snappy', yfloat: true })
- **compresser** `String` 可选，设置数据的压缩格式，目前云平台支持的压缩格式是'snappy'，默认不设置则根据数据自动判断是否解压，设置为'snappy'则一定会使用snappy解压数据，设置成其它值则一定不解压
- **yfloat** `Boolean` 可选，只有当数据格式是protobuf格式时才有效，设置数据是否需要进行yfloat解析，默认true，当数据类型是int64格式时会进行yfloat解析

##### 实例方法
DzhyunDataParser.prototype.parse(data) 根据数据自动判断按照什么格式解析
- **data** `ArrayBuffer|String` 必填
- **return** `Promise`

##### 全局方法
DzhyunDataParser.isJSON(data) 判断数据是否是JSON格式
- **data** `ArrayBuffer|String` 必填
- **return** `Boolean` 返回 true 或者 false 

DzhyunDataParser.parseJSON(data) 解析JSON格式数据
- **data** `ArrayBuffer|String` 必填
- **return** `Promise`

DzhyunDataParser.parseProtoBuf(data, yfloat) 解析protobuf格式数据
- **data** `ArrayBuffer|String` 必填
- **yfloat** `Boolean` 必填 int64格式数据是否做yfloat解析
- **return** `Promise`

DzhyunDataParser.uncompress(data) 解压数据，目前只支持snappy压缩格式
- **data** `ArrayBuffer|String` 必填
- **return** `Promise`

### webpack插件使用
由于protobuf格式需要数据格式定义文件（.proto），默认打包会将云平台接口所需要的所有格式定义都包含进去，导致生成的js文件较大，
因此提供一个webpack优化插件，可以在打包js时尽量减少依赖文件使得生成尽量小的文件

    import DzhyunDataParserPlugin from 'dzhyun-dataparser/plugin'
    
    plugins: [
        ...
        new DzhyunDataParserPlugin({ 
          compress: true,
          pb: true,
          json: true,
          filterProto: false,
        })
    ],

参数说明
- **compress** `Boolean` 可选，是否需要数据解压相关功能，默认true，如果设置为false则打包时会忽略解压数据相关的模块（snappyjs）
- **pb** `Boolean` 可选，是否需要protobuf格式数据解析相关功能，默认true，如果设置为false则打包时会忽略解析protobuf相关的模块（protobufjs）和数据格式定义文件（.proto），打包后文件最小
- **json** `Boolean` 可选，是否需要json格式数据解析相关功能，默认true
- **filterProto** `Boolean|Object` 可选，是否分析代码根据使用的接口来自动筛选需要的proto文件，默认false，设置为true则自动筛选；
设置为Object，可以指定需要包含的接口或者proto文件, 可以设置属性如下
>- **services** `Array<String>` 设置需要额外包含的接口数组（如`['/stkdata']`）
>- **protos** `Array<String>` 设置需要额外包含的proto文件名称数组（如`['dzhyun.zhubi.proto']`, 所有的proto文件在./proto目录中）
