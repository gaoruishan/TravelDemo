// 采用严格模式
'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    // 调用utils.styleLoaders的方法
    rules: utils.styleLoaders({
      // 开启调试的模式。默认为true
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        // 压缩
        compress: {
          // 警告：true保留警告，false不保留
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    // 将css提取到自己的文件中。比如打包之后的index页面有style插入，就是这个插件抽取出来的，减少请求
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // 将以下选项设置为“false”将不会从codesplit块中提取CSS。
      // 当webpack加载codesplit块时，他们的CSS将使用style-loader动态插入。
      // 它当前设置为“true”，因为我们看到源代码包含在codesplit包中，当它是“false”时，
      // 增加文件大小： https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // 压缩提取的CSS。我们正在使用此插件，以便可以减少来自不同组件的可能重复的CSS。
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // 使用正确的资产哈希生成dist index.html以进行缓存。
    // 您可以通过编辑/index.html来自定义输出 查看: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      // 压缩
      minify: {
        // 删除注释
        removeComments: true,
        // 删除空格
        collapseWhitespace: true,
        // 删除属性的引号
        removeAttributeQuotes: true
        // 更多的选择：https://github.com/kangax/html-minifier#options-quick-reference
      },
      // 通过CommonsChunkPlugin持续处理多个块的必要条件 模块排序，按照我们需要的顺序排序
      chunksSortMode: 'dependency'
    }),
    // 当供应商模块没有改变时，保持module.id稳定
    new webpack.HashedModuleIdsPlugin(),
    // 启用范围吊装
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 抽取公共的模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // node_modules中的任何必需模块都将解压缩到供应商
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 将webpack运行时和模块清单提取到其自己的文件中，以防止在更新应用程序包时更新供应商哈希
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // 此实例从代码拆分块中提取共享块，并将它们捆绑在一个单独的块中，类似于供应商块 查看: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    // 复制，比如打包完之后需要把打包的文件复制到dist里面
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
