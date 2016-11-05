var webpack = require('webpack');
var entry = require('./entry');
var plugins = require('./plugins');
var output = require('./output');
var resolve = require('./resolve');
var resolveLoader = require('./resolveLoader');
var preLoaders = require('./preLoaders');
var loaders = require('./loaders');

module.exports = {
  entry,
  plugins,
  output,
  resolve,
  resolveLoader,
  module: {
    preLoaders,
    loaders
  },
  postcss: function () {
    return [
      require('postcss-cssnext')({
        browsers: ['last 3 versions', 'iOS >= 8']
      })
    ]
  },
  sassResources: [
    'src/asset/style/helper/mixin/**/*.scss',
    'src/asset/style/config/variable/breakpoint.scss',
    'src/asset/style/config/variable/color.scss',
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter'),
    configFile: './.eslintrc'
  },
  node: {
    fs: 'empty'
  }
};
