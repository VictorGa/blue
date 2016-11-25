var path = require('path')

module.exports = [
  {
    test: /\.js$/,
    exclude: [
      path.resolve('test/src'),
      path.resolve('node_modules/')
    ],
    loader: 'babel'
  },
  {
    test: /\.js$/,
    include: path.resolve('src/app/'),
    loader: 'isparta'
  }
]
