const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './assets/js/app.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/css/main.css'
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: ['babel-preset-react-app']
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded'
            }
          }
        ]
      }
    ]
  }
};
