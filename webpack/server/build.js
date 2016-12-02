const webpack = require('webpack')
const webpackConfig = require('./webpack.server');

webpack(webpackConfig, function (error, stats) {
  if (error) {
    throw error
  }

  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
});
