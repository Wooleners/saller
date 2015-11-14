var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var ip = require('ip');
var colors = require('colors');

new WebpackDevServer(webpack(config), {
  contentBase: 'dist/',
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true
}).listen(3000, ip.address(), function (err, result) {
  if (err) {
    console.log(err);
  }
});

console.log('==> 🌎 Server Launch at  ' + (ip.address() + ':3000').blue);
