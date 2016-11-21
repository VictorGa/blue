const webpack = require('../webpack/test/webpack.test.js')

module.exports = config => {
  const TRAVIS = process.env.TRAVIS

  let singleRun = false
  let browsers = ['Chrome']

  if (TRAVIS) {
    singleRun = true
    browsers = ['chromeTravisCI']
  }

  const configuration = {
    browsers,
    singleRun: TRAVIS,
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha', 'coverage'],
    files: ['./index.js'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      './index.js': ['webpack']
    },
    webpack,
    webpackMiddleware: {
      noInfo: true
    },
    customLaunchers: {
      chromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    coverageReporter: {
      reporters: [
        {
          type: 'text'
        },
        {
          type: 'html',
          dir: 'coverage/'
        }
      ]
    }
  }

  config.set(configuration)
}
