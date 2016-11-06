var path = require('path');
var {paths, settings} = require('../../config');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('../webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  devtool: settings.productionSourceMap ? '#source-map' : false,
  plugins
});
