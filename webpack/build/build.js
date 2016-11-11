var path = require('path');
var {paths,settings} = require('../../config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.build');
var timestamp = Math.floor(new Date().getTime() / 1000);
var buildTarget = path.join(__dirname, '../../', `${paths.buildPath}/version/${timestamp}/`);
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.output = {
  path: buildTarget,
  filename: `js/[name].js`,
  chunkFilename: `js/[id].js`
};

webpackConfig.plugins.unshift(
  new ExtractTextPlugin(`css/[name].css`)
);

webpack(webpackConfig, function (err, stats) {
  if (err) throw err;

  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
});
