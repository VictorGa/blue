var webpack = require('webpack');
var entry = require('./entry');
var plugins = require('./plugins');
var output = require('./output');
var resolve = require('./resolve');
var resolveLoader = require('./resolveLoader');
var loaders = require('./loaders');

module.exports = {
  entry,
  plugins,
  output,
  resolve,
  resolveLoader,
  module: {
    loaders
  }
};
