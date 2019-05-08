// 采用严格模式
'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
// 通过webpack-merge实现webpack.dev.conf.js对wepack.base.config.js的继承
const merge = require('webpack-merge')
const path = require('path')
// 又引入webpack.base.conf基础配置
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 美化webpack的错误信息和日志的插件①
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// 查看空闲端口位置，默认情况下搜索8000这个端口②
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    // 规则是工具utils中处理出来的styleLoaders，生成了css，less,postcss等规则
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map开发速度更快
  devtool: config.dev.devtool,

  // 这些devServer选项应该在/config/index.js中自定义
  devServer: {
    // 控制台显示的选项有none, error, warning 或者 info
    clientLogLevel: 'warning',
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    // 热加载
    hot: true,
    // 因为我们使用CopyWebpackPlugin。
    contentBase: false,
    // 压缩
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    // 调试时自动打开浏览器
    open: config.dev.autoOpenBrowser,
    // warning 和 error 都要显示
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    // 接口代理
    proxy: config.dev.proxyTable,
    // FriendlyErrorsPlugin所必需的
    quiet: true,
    watchOptions: {
      // 文件系统检测改动
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    // ⑤模块热替换插件，修改模块时不需要刷新页面
    new webpack.HotModuleReplacementPlugin(),
    // HMR在更新时在控制台中显示正确的文件名。
    new webpack.NamedModulesPlugin(),
    // 当webpack编译错误的时候，来中端打包进程，防止错误代码打包到文件中
    new webpack.NoEmitOnErrorsPlugin(),
    // 该插件可自动生成一个 html5 文件或使用模板文件将编译好的代码注入进去⑥
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 复制自定义静态资产
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  // 查找端口号
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // 发布新的端口，这是e2e测试所必需的
      process.env.PORT = port
      // 将端口添加到devServer配置
      devWebpackConfig.devServer.port = port

      // 添加FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
