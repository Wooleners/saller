var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path'),
  pkg = require('./package'),
  ip = require('ip'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ROOT_PATH = path.resolve(__dirname),
  APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    APP_PATH
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'build/app.[hash:8].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      )
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'jsx?harmony', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.(jp?g|gif|png|woff|ico)$/,
      loader: 'url-loader?limit=10000&name=[name].[hash:8].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: 'body',
      template: "src/index.tpl.html"
    }),
    new ExtractTextPlugin('build/app.[hash:8].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'eval-source-map'
};
