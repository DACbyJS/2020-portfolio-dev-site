const path = require('path');
const miniCssPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    site: [
      './assets/javascripts/index.js',
      './assets/stylesheets/index.scss'
    ]
  },
  output: {
    filename: 'assets/javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [miniCssPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [miniCssPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  resolve: {
    alias: {
      'jquery': path.resolve(path.join(__dirname, 'node_modules', 'jquery'))
     },
  },
  plugins: [
    new miniCssPlugin({
      filename: 'assets/stylesheets/[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}