const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    bundle: path.resolve(".", 'index.js')
  },
  resolve: {
	alias: {
		svelte: path.resolve('node_modules', 'svelte')
	},
	extensions: ['.mjs', '.js', '.svelte'],
	mainFields: ['svelte', 'browser', 'module', 'main']
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
	  {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
		use: {
			loader: 'svelte-loader',
			options: {
				emitCss: true,
				hotReload: true
			}
		  }
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
              sassOptions: {
                includePaths: [
                  './theme',
                  './node_modules'
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ],
};