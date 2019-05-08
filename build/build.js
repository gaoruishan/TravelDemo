// 采用严格模式
'use strict'
// check-versions：调用检查版本的文件。加（）代表直接调用该函数
require('./check-versions')()
// **设置当前是生产环境**
process.env.NODE_ENV = 'production'
// 下面定义常量引入插件
// ①加载动画
const ora = require('ora')
// ②删除文件
const rm = require('rimraf')
const path = require('path')
// ③对文案输出的一个彩色设置
const chalk = require('chalk')
const webpack = require('webpack')
// 默认读取下面的index.js文件
const config = require('../config')
// 这个webpack.prod.conf是具体代码
const webpackConfig = require('./webpack.prod.conf')
// 调用start的方法实现加载动画，优化用户体验
const spinner = ora('building for production...')
spinner.start()
// 先删除dist文件再生成新文件，因为有时候会使用hash来命名，删除整个文件可避免冗余
// config是配置文件,一般开发只用这个,比如配置assetsRoot和assetsSubDirectory
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 这是核心webpack方法
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      // 如果您正在使用ts-loader，将其设置为true将使构建期间出现TypeScript错误。
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    // 错误输出 没啥用
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      // 停止
      process.exit(1)
    }
    // 没啥用
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
