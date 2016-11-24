var _ = require('lodash')
var webpack = require('webpack');
var {definitions, paths} = require('../../config');
var baseWebpackConfig = require('../webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');


const { publicPath } = paths;
const processEnv = _.merge(definitions, { publicPath })

module.exports = [

  new DashboardPlugin(),

  new webpack.DefinePlugin({
    'process.env': JSON.stringify(processEnv)
  }),

  /**
   * https://github.com/webpack/docs/wiki/optimization
   */
  new webpack.optimize.OccurenceOrderPlugin(),

  /**
   * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
   */
  new webpack.HotModuleReplacementPlugin(),

  /**
   * https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
   */
  new webpack.NoErrorsPlugin(),

  /**
   * https://github.com/ampedandwired/html-webpack-plugin
   */
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  })
];
