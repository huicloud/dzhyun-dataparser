'use strict';

const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const through = require('through-gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const babel = require('gulp-babel');
const del = require('del');

const pbjs = require('protobufjs/cli/pbjs');
const DzhyunDataParserPlugin = require('./plugin');

const lib = 'lib';
const dist = 'dist';
const src = './src/**/*.js';

gulp.task('clean-lib', function() {
  return del([lib]);
});

gulp.task('clean-dist', function() {
  return del([dist]);
});

gulp.task('node-lib', ['clean-lib'], function () {
  return gulp.src(src)
    .pipe(babel())
    .pipe(gulpif(/dzhyunProto\.js/, through(function (file, encoding, callback) {
      // 转换proto->json
      pbjs.main([ '--target', 'json-module', '-w', 'commonjs', './proto/MSG.proto', './proto/dzhua.proto', '-l'], (err, output) => {
        if (err) throw err;
        file.contents = new Buffer(output);
        callback(null, file);
      });
    })))
    .pipe(gulp.dest(lib));
});

gulp.task('browser-dist', ['clean-dist', 'node-lib'], function() {
  return Promise.all([
    {name: 'dzhyun-dataparser', plugins: [new DzhyunDataParserPlugin()]},
    {name: 'dzhyun-dataparser-json', plugins: [new DzhyunDataParserPlugin({pb: false})]},
    {name: 'dzhyun-dataparser-pb', plugins: [new DzhyunDataParserPlugin({json: false})]}].map((config) => {
    return new Promise((resolve) => {
      gulp.src([])
        .pipe(webpackStream({
          entry: {
            [config.name]: './src/DzhyunDataParser.js',
            [`${config.name}.min`]: './src/DzhyunDataParser.js',
          },
          output: {
            filename: '[name].js',
            library: 'DzhyunDataParser',
            libraryTarget: 'umd',
          },
          module: {
            rules: [{
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            }],
          },
          plugins: [
            new webpack.optimize.UglifyJsPlugin({
              include: /\.min\.js$/,
              minimize: true
            }),
          ].concat(config.plugins || []),
          devtool: 'source-map',
        }, webpack))
        .pipe(gulp.dest(dist)).on('finish', resolve);
    });
  }));
});

gulp.task('default', ['node-lib', 'browser-dist']);
