const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require('os');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash:5].bundles.js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        // parallel: true
        parallel: os.cpus().length,
      }),
    ],
  },
  plugins: [new HardSourceWebpackPlugin()],
};
