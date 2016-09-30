/* eslint no-console: 0 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js')('dev');
const properties = require('./properties.json');
const pkg = require('./package.json');

const host = properties.Host;
const port = properties.Port;
const restHost = properties.RestHost;
const restPort = properties.RestPort;

const serverUrl = `http://${restHost}:${restPort}`;
const clientUrl = `http://${host}:${port}`;

const config = Object.create(webpackConfig);
config.entry.app.unshift(`webpack-dev-server/client?${clientUrl}/`, 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.watch = true;

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: '/dist',
  quiet: true,
  stats: {
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: true,
    chunkModules: false,
    assets: false
  },
  proxy: {
    '/api/*': serverUrl
  }
});

server.listen(port, host, err => {
  if (err) {
    console.log(err);
  }
});
