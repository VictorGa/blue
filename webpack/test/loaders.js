var path = require('path');
var projectRoot = path.resolve(__dirname, '../../');
var combineLoaders = require('webpack-combine-loaders')

module.exports = [
  {
    test: /\.js$/,
    loader: 'babel',
    include: projectRoot,
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: combineLoaders([
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        query: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader'
      }
    ])
  }
];
