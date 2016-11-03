var path = require('path');
var {paths,settings} = require('../../config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.build');
var timestamp = Math.floor(new Date().getTime() / 1000);
var assetRoot = `version/${timestamp}/${paths.assetsRoot}`;

webpackConfig.output = {
  path: paths.assetsRoot,
  filename: `${assetRoot}/js/[name].js`,
  chunkFilename: `${assetRoot}/js/[id].js`
};

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
