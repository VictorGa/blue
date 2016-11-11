var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {paths,settings} = require('../../config');

var plugins = [

  /**
   *
   */
  new ProgressBarPlugin(),

  /**
   *
   */
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),

  /**
   *
   */
  new webpack.optimize.OccurenceOrderPlugin(),

  /**
   *
   */

  new ExtractTextPlugin(`${assetRoot}/css/[name].[contenthash].css`),

  /**
   *
   */
  new HtmlWebpackPlugin({
    filename: paths.index,
    template: 'index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  }),

  /**
   *
   */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
          path.join(__dirname, '../node_modules')
        ) === 0
      )
    }
  }),

  /**
   *
   */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    chunks: ['vendor']
  }),

  /**
   *
   */
  settings.productionGzip ? new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp(
      '\\.(' +
        settings.productionGzipExtensions.join('|') +
      ')$'
    ),
    threshold: 10240,
    minRatio: 0.8
  }) : null
];

module.exports = _.compact(plugins);
