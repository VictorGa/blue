const webpackConfig = require('../webpack/webpack.config.js')

delete webpackConfig.entry

module.exports = config => {
  const singleRun = process.env.TRAVIS

  const configuration = {
    browsers: ['PhantomJS'],
    singleRun,
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    files: ['./index.js'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter'
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
  }

  // if (process.env.TRAVIS) {
  //   configuration.customLaunchers = {
  //     chromeTravisCI: {
  //       base: 'Chrome',
  //       flags: ['--no-sandbox']
  //     }
  //   }
  //
  //   configuration.browsers = ['chromeTravisCI']
  // }

  config.set(configuration)
}
