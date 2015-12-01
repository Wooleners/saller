import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import ip from 'ip';
import colors from 'colors';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'dist/',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    //if no favicon
    if (req.url === '/favicon.ico') {
      res.writeHead(200, {'Content-Type': 'images/x-icon'});
      res.end();
      return;
    }
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/build'));
  app.get('*', function response(req, res) {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, {'Content-Type': 'images/x-icon'});
      res.end();
      return;
    }
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}

app.listen(port, ip.address(), function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on  ' + (ip.address() + ':3000').blue);
});
