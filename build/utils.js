/**
 * 资源文件路径、加载器和创建通知回调: assetsPath cssLoaders styleLoaders createNotifierCallback
 */
// 采用严格模式
'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
// 导出文件的位置，根据环境判断开发环境和生产环境，为config文件中index.js文件中定义的build.assetsSubDirectory或dev.assetsSubDirectory
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  // Node.js path 模块提供了一些用于处理文件路径的小工具①
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
  // 使用了css-loader和postcssLoader，通过options.usePostCSS属性来判断是否使用postcssLoader中压缩等方法
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // 生成要与提取文本插件一起使用的加载器字符串
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        // Object.assign是es6语法的浅复制，后两者合并后复制完成赋值
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // 指定该选项时提取CSS（在生成构建期间就是这种情况）
    if (options.extract) {
      // ExtractTextPlugin可提取出文本，代表首先使用上面处理的loaders，当未能正确引入时使用vue-style-loader
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      // 返回vue-style-loader连接loaders的最终值
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    // 需要css-loader 和 vue-style-loader
    css: generateLoaders(),
    // 需要css-loader和postcssLoader  和 vue-style-loader
    postcss: generateLoaders(),
    // 需要less-loader 和 vue-style-loader
    less: generateLoaders('less'),
    // 需要sass-loader 和 vue-style-loader
    sass: generateLoaders('sass', { indentedSyntax: true }),
    // 需要sass-loader 和 vue-style-loader
    scss: generateLoaders('sass'),
    // 需要stylus-loader 和 vue-style-loader
    stylus: generateLoaders('stylus'),
    // 需要stylus-loader 和 vue-style-loader
    styl: generateLoaders('stylus')
  }
}

// 为独立样式文件生成加载器（.vue之外）
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  // 将各种css,less,sass等综合在一起得出结果输出output
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  // 发送跨平台通知系统
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return
    // 当报错时输出错误信息的标题，错误信息详情，副标题以及图标
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
