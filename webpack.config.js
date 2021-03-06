const path = require('path');
// 获取mode参数
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const _mode = argv.mode || 'development';
const port = argv.port || 8080;
const _modeflag = _mode === 'production' ? true : false;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const baseConfig = {
  entry: path.resolve(__dirname, './src/main.js'),
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['cache-loader', 'babel-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 防止图片url变成[object Module]
              esModule: false,
              limit: 8192,
              name: 'img/[hash:5].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|TTF|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 资源url变成[object Module]
              esModule: false,
              limit: 8192,
              name: 'font/[name].[ext]',
              fallback: 'file-loader',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: _modeflag ? 'css/[name].[hash:5].css' : 'css/[name].css',
      chunkFilename: _modeflag ? 'css/[id].[hash:5].css' : 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      title: '我的vue-cli',
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico'),
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
      },
    }),
    // 编译进度条显示
    new ProgressBarPlugin(),
  ],
  // 分割代码
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录下的文件
          priority: -10, // 优先级配置项
        },
        default: {
          minChunks: 20,
          priority: -20, // 优先级配置项
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    // 配置别名
    alias: {
      '@component': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  // 配置开发服务器
  devServer: {
    port,
    // 防止vue-router本地刷新404
    historyApiFallback: true,
    quiet: true,
  },
  // 引入外部资源 打包使用cdn 减少包大小
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
  },
};

module.exports = smp.wrap(merge(baseConfig, _mergeConfig));
