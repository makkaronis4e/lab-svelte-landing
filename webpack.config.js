const webpack = require('webpack');

const sassOptions = {
  includePaths: [
    './theme',
    './node_modules',
  ]
};


const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  	entry: {
		bundle: ['./src/main.js']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
  ].filter(Boolean),
  devtool: dev && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(svelte|html)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            dev,
            hydratable: true,
            hotReload: true,
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions
            },
          },
        ],
      }
    ],
  },
};
