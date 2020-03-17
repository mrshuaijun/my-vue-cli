const argv = require('yargs-parser')(process.argv.slice(2))
const port = argv.port || 8080
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:5].bundles.js',
    publicPath: '/'
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${port}`],
        notes: ['编译完成,可以访问啦!!!!']
      },
      onErrors: function(severity, errors) {
        console.error(severity)
      },
      clearConsole: true
    })
  ]
}
