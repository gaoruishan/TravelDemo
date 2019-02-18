// 采用严格模式
'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  // 开发环境下面的配置
  dev: {
    // 子目录，一般存放css,js,image等文件
    assetsSubDirectory: 'static',
    // 根目录
    assetsPublicPath: '/',
    // 可利用该属性解决跨域的问题 将http://localhost:8080/api/index.json 改为静态可访问的http://localhost:8080/static/index.json
    proxyTable: {
      '/api':{
        // 正式接口调试改变URL
        target:'http://localhost:8080',
        pathRewrite:{
          '^/api':'/static'
        }
      }
    },

    // 各种Dev Server设置
    host: 'localhost', // 可以被process.env.host覆盖
    // 可以被process.env.PORT覆盖，如果端口正在使用，将确定一个端口
    port: 8080,
    // 是否在编译（输入命令行npm run dev）后打开http://localhost:8080/页面，以前配置为true，近些版本改为false，个人偏向习惯自动打开页面
    autoOpenBrowser: false,
    // 浏览器错误提示
    errorOverlay: true,
    // 跨平台错误提示
    notifyOnErrors: true,
    // 使用文件系统(file system)获取文件改动的通知devServer.watchOptions
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // 使用Eslint Loader？
    // 如果为true，则在捆绑期间将对您的代码进行处理
    // linting错误和警告将显示在控制台中。
    useEslint: true,
    // 如果为true，则eslint错误和警告也将显示在浏览器的错误覆盖中。
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */
    // 增加调试，该属性为原始源代码（仅限行）不可在生产环境中使用
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
    // 使缓存失效
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    // 代码压缩后进行调bug定位将非常困难，于是引入sourcemap记录压缩前后的位置信息记录，当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试
    cssSourceMap: true
  },
  // 生产环境下面的配置
  build: {
    // index编译后生成的位置和名字，根据需要改变后缀，比如index.php
    index: path.resolve(__dirname, '../dist/index.html'),

    // 编译后存放生成环境代码的位置
    assetsRoot: path.resolve(__dirname, '../dist'),
    // js,css,images存放文件夹名
    assetsSubDirectory: 'static',
    // 发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径
    assetsPublicPath: '/travel',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // 默认情况下Gzip关闭，因为许多流行的静态主机，如Surge或Netlify已经为您gzip所有静态资产。
    // 在设置为“true”之前，请确保: npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 运行带有额外参数的build命令，以在构建完成后查看捆绑分析器报告:`npm run build --report`
    // 设置为“true”或“false”以始终打开或关闭它
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
