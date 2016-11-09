var webpackConfig = require('../webpack/webpack.config.js');

delete webpackConfig.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false,
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    files: [
        './index.js',
    ],
    plugins: [
        'karma-phantomjs-launcher',
        'karma-chai',
        'karma-mocha',
        'karma-webpack',
        'karma-mocha-reporter',
    ],
    preprocessors: {
        './index.js': ['webpack']
    },
    webpack: {
      entry: './test/index.js',
      output: {
        path: __dirname,
        filename: 'test-bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          }
        ]
      }
    },
    webpackMiddleware: {
        noInfo: true
    }
  });
};
