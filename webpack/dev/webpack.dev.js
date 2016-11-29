var webpack = require('webpack');
var merge = require('webpack-merge');
var stats = require('./stats');
var plugins = require('./plugins');
var loaders = require('./loaders');
var baseWebpackConfig = require('../webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./webpack/dev/dev-client'].concat(baseWebpackConfig.entry[name])
});

 const config = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  stats,
  plugins,
  module: {
      loaders
  }
});

module.exports = config;
