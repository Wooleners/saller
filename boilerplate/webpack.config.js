var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path'),
    pkg = require('./package'),
    ip = require('ip'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'src'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    TEMP_PATH = path.resolve(APP_PATH, 'assets/template');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + ip.address() + ':3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    APP_PATH
  ],
  output: {
    path: BUILD_PATH,
    filename: '[hash:4]/app.[hash].js',
    publicPath: '/dist/'
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
        'css?sourceMa&-minimize!' + 'autoprefixer-loader'
      )
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'jsx?harmony', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: TEMP_PATH
    }),
    new ExtractTextPlugin('[hash:4]/app.[hash].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  devtool: 'source-map'
};
