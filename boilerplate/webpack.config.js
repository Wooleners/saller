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
    'webpack-hot-middleware/client',
    APP_PATH
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'build/app.[hash:4].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        stage: 0,
        optional: ['runtime'],
        env: {
          development: {
            plugins: ['react-transform'],
            extra: {
              'react-transform': {
                transforms: [{
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react']
                }]
              }
            }
          }
        }
      }
    }, {
      test: /\.(jpe?g|gif|png|ico|svg)$/,
      loader: 'url?limit=1024&name=build/[name].[hash:4].[ext]'
    }, {
      test: /\.(woff2?|otf|eot|ttf)$/i,
      loader: 'url?name=fonts/[name].[hash:4].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  resolve: {
    alias: {
      'redux': path.join(__dirname, 'node_modules/redux')
    },
    extensions: ['', '.js', '.jsx']
  },
  postcss: function() {
    return [
      require('autoprefixer'),
      require('precss')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: 'body',
      template: "src/index.tpl.html"
    }),
    new ExtractTextPlugin('build/app.[hash:4].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'eval-source-map'
};
