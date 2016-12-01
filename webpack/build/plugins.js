var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var PrerenderSpaPlugin = require('prerender-spa-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var {paths,settings} = require('../../config');

var plugins = [

  new ExtractTextPlugin(`css/[name].css`),

  /**
   *
   */
  new ProgressBarPlugin(),

  /**
   * Prerender SPA Plugin
   * https://github.com/chrisvfritz/prerender-spa-plugin
   */
  new PrerenderSpaPlugin(
    path.join(__dirname, '../../dist'),
    ['/'],
    {
      captureAfterTime: 5000
    }
  ),

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
