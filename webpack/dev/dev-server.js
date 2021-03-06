var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev');
var config = require('../../config');
var { paths } = config;
var proxyMiddleware = require('http-proxy-middleware');
var DashboardPlugin = require('webpack-dashboard/plugin');

var app = express();
var port = 8080;
var {proxyTable} = config.settings;
var compiler = webpack(webpackConfig);

var hotMiddleware = require('webpack-hot-middleware')(compiler);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb()
  })
});

compiler.apply(new DashboardPlugin())

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve static files
var staticPath = path.posix.join(paths.publicPath, paths.staticPath);
app.use(staticPath, express.static(`./${staticPath}`));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
