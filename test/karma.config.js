const webpackConfig = require('../webpack/webpack.config.js')

webpackConfig.entry = './test/index.js'

module.exports = config => {
  const TRAVIS = process.env.TRAVIS

  let singleRun = false
  let browsers = ['Chrome']

  if (TRAVIS) {
    singleRun = true
    browsers = ['PhantomJS']
  }

  const configuration = {
    browsers,
    singleRun: TRAVIS,
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    files: ['./index.js'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-coverage',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      './index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  }

  config.set(configuration)
}
