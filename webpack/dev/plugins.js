var baseWebpackConfig = require('../webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
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
