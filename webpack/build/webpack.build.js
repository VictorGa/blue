var path = require('path');
var {paths, settings} = require('../../config');
var baseWebpackConfig = require('../webpack.config');
var plugins = require('./plugins');
var webpack = require('webpack');
var merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
  devtool: settings.productionSourceMap ? '#source-map' : false,
  plugins
});
