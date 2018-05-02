// import webpack from 'webpack';
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./config-development.babel');

// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from './config-development.babel';

module.exports = (app) => {
  const webpackCompiler = webpack(webpackConfig);

  // Use dev middleware
  app.use(webpackDevMiddleware(webpackCompiler, {
    // Defines the level of messages to log
    logLevel: 'warn',
    // Public path to bind the middleware to
    publicPath: webpackConfig.output.publicPath,
  }));

  // Use webpack hot reloading
  app.use(webpackHotMiddleware(webpackCompiler));
};
