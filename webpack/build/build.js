var path = require('path');
var {paths,settings} = require('../../config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.build');
var timestamp = Math.floor(new Date().getTime() / 1000);
var publicPath = `version/${timestamp}/`;
var buildTarget = path.join(__dirname, '../../', `${paths.buildPath}/${publicPath}`);
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.output = {
  path: `${buildTarget}`,
  filename: `js/[name].js`,
  chunkFilename: `js/[id].js`
}

const processEnv = _.merge(definitions, { publicPath })

webpackConfig.plugins.unshift(
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(processEnv)
  })
)

shell.mkdir('-p', buildTarget)
shell.cp('-R', paths.staticPath, buildTarget)

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
