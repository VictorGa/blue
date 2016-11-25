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
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'dist/image/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'dist/font/[name].[hash:7].[ext]'
    }
  }
];
