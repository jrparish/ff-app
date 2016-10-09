const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: {
    app: ['./app/src/app.js']
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    modules: [
      path.resolve('./app/src'),
      path.resolve('node_modules')
    ],
    extensions: ['.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'app/src')
        ],
        loader: 'babel'
      },
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, 'app/src')
        ],
        loaders: ['babel', 'awesome-typescript']
      },
      { test: /\.html$/, loader: 'html' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|gif)$/, loader: 'file' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    new HtmlWebpackPlugin({
      title: 'FF App',
      template: './app/index.html'
    })
  ]
};

const developmentConfig = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-source-map',
  cache: true,
  plugins: [
    ...baseConfig.plugins,

    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
});

const productionConfig = Object.assign({}, baseConfig, {
  plugins: [
    ...baseConfig.plugins,

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unused: true
      },
      sourceMap: false
    })
  ]
});

module.exports = function (env) {
  return env === 'prod' ? productionConfig : developmentConfig;
};
