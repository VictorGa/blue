var path = require('path');
var webpack = require('webpack');
var {paths, definitions} = require('../config');

// @TODO move this variable
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(definitions)
    })
  ],
  entry: {
    app: './src/bootstrap.js'
  },
  output: {
    path: paths.assetsRoot,
    publicPath: paths.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'fonts': path.resolve(__dirname, '../src/assets/fonts'),
      'components': path.resolve(__dirname, '../src/app/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'dist/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'dist/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
};
