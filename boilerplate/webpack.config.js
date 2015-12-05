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
      loader: ['style', 'css?root='+__dirname, 'resolve-url', 'less']
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'jsx?harmony', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.(jpe?g|gif|png|ico)$/,
      loader: 'url?limit=1024&name=images/[name].[hash:4].[ext]'
    }, {
      test: /\.(woff2?|otf|eot|svg|ttf)$/i,
      loader: 'url?name=fonts/[name].[hash:4].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json'
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
  ]
};
