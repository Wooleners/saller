var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = __dirname + '/node_modules';

var config = {
	cache: true,
	entry: {
		app: path.resolve(__dirname, 'src/index.js'),
		shared: [
			'react',
			'react-router',
			'react-redux',
			'redux'
		]
	},
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'app.js',
		chunkFilename: '[id].js',
		//cdn host
		publicPath: ''
	},
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules',
      'src/assets'
		],
		extensions: ['', '.json', '.js', '.png']
	},
	module: {
		loaders: [{
			test: /\.less$/,
			loader: ExtractTextPlugin.extract(
				'css?-minimize!' + 'autoprefixer-loader!' + 'less'
			)
		}, {
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			loaders: ['babel?optional=runtime&stage=0']
		}, {
			test: /\.json?$/,
			loader: 'json'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css!postcss')
		}, {
			test: /\.(jp?g|gif|png|woff|ico)$/,
			loaders: ['url-loader?limit=8192&name=[name].[hash:4].[ext]', 'img?{bypassOnDebug: true, progressive:true, optimizationLevel: 3, pngquant:{quality: "65-80"}}']
		}]
	},
	imagemin: {
		gifsicle: {
			interlaced: false
		},
		jpegtran: {
			progressive: true,
			arithmetic: false
		},
		optipng: {
			optimizationLevel: 5
		},
		pngquant: {
			floyd: 0.5,
			speed: 2
		},
		svgo: {
			plugins: [{
				removeTitle: true
			}, {
				convertPathData: false
			}]
		}
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new StatsPlugin('webpack.stats.json', {
			source: false,
			modules: true
		}),
		new ExtractTextPlugin('app.css'),
		new webpack.optimize.CommonsChunkPlugin('shared', 'shared.js'),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			cache: false,
			compressor: {
				warnings: false,
				screw_ie8: false
			},
			output: {
				comments: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	],
	postcss: [
		require('autoprefixer')
	]
};

module.exports = config;