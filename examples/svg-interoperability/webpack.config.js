// NOTE: To use this example standalone (e.g. outside of deck.gl repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
  entry: {
    app: resolve('./app.js')
  },
  devtool: 'source-maps',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'buble-loader',
      include: [resolve('.')],
      exclude: [/node_modules/],
      options: {
        objectAssign: 'Object.assign'
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

// DELETE THIS LINE WHEN COPYING THIS EXAMPLE FOLDER OUTSIDE OF DECK.GL
// It enables bundling against src in this repo rather than installed deck.gl module
module.exports = require('../webpack.config.local')(module.exports);
