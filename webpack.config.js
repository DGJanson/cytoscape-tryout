const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin( {
      title: 'KvK Cytoscape'
    })
  ],
  output: {
    filename: 'ckvk.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      }      
    ]
  }
};
