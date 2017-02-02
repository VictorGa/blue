var webpack = require('webpack');
var entry = require('./entry');
var postcss = require('./postcss');
var vue = require('./vue');
var plugins = require('./plugins');
var output = require('./output');
var resolve = require('./resolve');
var resolveLoader = require('./resolveLoader');
var preLoaders = require('./preLoaders');
var postLoaders = require('./postLoaders');
var loaders = require('./loaders');

module.exports = {
  entry,
  plugins,
  output,
  resolve,
  resolveLoader,
  module: {
    preLoaders,
    loaders,
    postLoaders
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
    configFile: './.eslintrc'
  },
  postcss,
  vue
};
