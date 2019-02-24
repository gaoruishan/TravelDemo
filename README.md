# 去哪儿 Demo

>  一个Vue2.5 + webpack 的练习Demo

## Build Setup

``` bash
# 安装依赖
npm install

# 启动服务, 热加载 默认 localhost:8080, 若8080已使用会自动找另外一个端口
npm run dev

# 压缩构建生产环境
npm run build

# 构建用于生产并查看捆绑分析器报告
npm run build --report
```

有关工作原理的详细说明，请查看 [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目笔记
## 1,目录结构
```
├── build             # webpack/node 配置项
├── config            # 测试、开发、上线的环境配置
├── node_modules      # node依赖包
├── src               # 源代码目录
│  ├── api            # 请求后端和模拟数据的 API
│  ├── assets         # webpack 打包的静态资源文件
│  ├── components     # 所有组件
│  ├── mock           # 模拟数据
│  ├── router         # 路由
│  ├── service        # 服务
│  ├── store          # vuex 状态管理
│  │  ├── modules     #
│  │  └── index.js    #
│  ├── styles         # 样式
│  ├── utils          # 全局工具类，directive, mixin 还有绑定到 Vue.prototype 的函数
│  ├── views          # 业务页面
│  ├── App.vue        # 根组件
│  └── main.js        # vue 入口文件
└── static            # npm没有的第三方库
```

## 2,根目录配置文件
```
.babelrc
- babel的配置文件, babel 的作用是将 ES6 转换成 ES5

.editorconfig
- 项目编码、缩进、尾行插入换行符、过滤尾部空格

.eslintignore
- 过滤不需要eslint校验的文件类型和目录

.eslintrc.js
- eslint配置文件一个用来识别ECMAScript 并且按照规则给出报告的代码检测工具

.postcssrc.js
- 支持通过 postcss-loader 自动加载同一个配置文件,处理的普通CSS文件和 *.vue 文件中的 CSS 之间共享相同的配置

.index.html
- 应用运行的html文件

.package.json
- 关键文件: 项目信息、依赖关系和插件配置
 {
 //从name到private都是package的配置信息，也就是我们在脚手架搭建中输入的项目描述
   "name": "shop",//项目名称：不能以.(点)或者_（下划线）开头，不能包含大写字母，具有明确的的含义与现有项目名字不重复
   "version": "1.0.0",//项目版本号：遵循“大版本.次要版本.小版本”
   "description": "A Vue.js project",//项目描述
   "author": "qietuniu",//作者名字
   "private": true,//是否私有
   //scripts中的子项即是我们在控制台运行的脚本的缩写
   "scripts": {
    //①webpack-dev-server:启动了http服务器，实现实时编译;
    //inline模式会在webpack.config.js入口配置中新增webpack-dev-server/client?http://localhost:8080/的入口,使得我们访问路径为localhost:8080/index.html（相应的还有另外一种模式Iframe）;
    //progress:显示打包的进度
     "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
     "start": "npm run dev",//与npm run dev相同，直接运行开发环境
     "build": "node build/build.js"//使用node运行build文件
   },
   //②dependencies(项目依赖库):在安装时使用--save则写入到dependencies
   "dependencies": {
     "vue": "^2.5.2",//vue.js
     "vue-router": "^3.0.1"//vue的路由插件
   },
   //和devDependencies（开发依赖库）：在安装时使用--save-dev将写入到devDependencies
   "devDependencies": {
     "autoprefixer": "^7.1.2",//autoprefixer作为postcss插件用来解析CSS补充前缀，例如 display: flex会补充为display:-webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex。
     //babel:以下几个babel开头的都是针对es6解析的插件。用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本
     "babel-core": "^6.22.1",//babel的核心，把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。
     "babel-helper-vue-jsx-merge-props": "^2.0.3",//预制babel-template函数，提供给vue,jsx等使用
     "babel-loader": "^7.1.1",//使项目运行使用Babel和webpack来传输js文件，使用babel-core提供的api进行转译
     "babel-plugin-syntax-jsx": "^6.18.0",//支持jsx
     "babel-plugin-transform-runtime": "^6.22.0",//避免编译输出中的重复，直接编译到build环境中
     "babel-plugin-transform-vue-jsx": "^3.5.0",//babel转译过程中使用到的插件，避免重复
     "babel-preset-env": "^1.3.2",//转为es5，transform阶段使用到的插件之一
     "babel-preset-stage-2": "^6.22.0",//ECMAScript第二阶段的规范
     "chalk": "^2.0.1",//用来在命令行输出不同颜色文字
     "copy-webpack-plugin": "^4.0.1",//拷贝资源和文件
     "css-loader": "^0.28.0",//webpack先用css-loader加载器去解析后缀为css的文件，再使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
     "extract-text-webpack-plugin": "^3.0.0",//将一个以上的包里面的文本提取到单独文件中
     "file-loader": "^1.1.4",//③打包压缩文件，与url-loader用法类似
     "friendly-errors-webpack-plugin": "^1.6.1",//识别某些类别的WebPACK错误和清理，聚合和优先排序，以提供更好的开发经验
     "html-webpack-plugin": "^2.30.1",//简化了HTML文件的创建，引入了外部资源，创建html的入口文件，可通过此项进行多页面的配置
     "node-notifier": "^5.1.2",//支持使用node发送跨平台的本地通知
     "optimize-css-assets-webpack-plugin": "^3.2.0",//压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
     "ora": "^1.2.0",//加载（loading）的插件
     "portfinder": "^1.0.13",//查看进程端口
     "postcss-import": "^11.0.0",//可以消耗本地文件、节点模块或web_modules
     "postcss-loader": "^2.0.8",//用来兼容css的插件
     "postcss-url": "^7.2.1",//URL上重新定位、内联或复制
     "rimraf": "^2.6.0",//节点的UNIX命令RM—RF,强制删除文件或者目录的命令
     "semver": "^5.3.0",//用来对特定的版本号做判断的
     "shelljs": "^0.7.6",//使用它来消除shell脚本在UNIX上的依赖性，同时仍然保留其熟悉和强大的命令，即可执行Unix系统命令
     "uglifyjs-webpack-plugin": "^1.1.1",//压缩js文件
     "url-loader": "^0.5.8",//压缩文件，可将图片转化为base64
     "vue-loader": "^13.3.0",//VUE单文件组件的WebPACK加载器
     "vue-style-loader": "^3.0.1",//类似于样式加载程序，您可以在CSS加载器之后将其链接，以将CSS动态地注入到文档中作为样式标签
     "vue-template-compiler": "^2.5.2",//这个包可以用来预编译VUE模板到渲染函数，以避免运行时编译开销和CSP限制
     "webpack": "^3.6.0",//打包工具
     "webpack-bundle-analyzer": "^2.9.0",//可视化webpack输出文件的大小
     "webpack-dev-server": "^2.9.1",//提供一个提供实时重载的开发服务器
     "webpack-merge": "^4.1.0"//它将数组和合并对象创建一个新对象。如果遇到函数，它将执行它们，通过算法运行结果，然后再次将返回的值封装在函数中
   },
   //engines是引擎，指定node和npm版本
   "engines": {
     "node": ">= 6.0.0",
     "npm": ">= 3.0.0"
   },
   //限制了浏览器或者客户端需要什么版本才可运行
   "browserslist": [
     "> 1%",
     "last 2 versions",
     "not ie <= 8"
   ]
 }

```

##常用知识点
```

1.对项目目录和配置使用说明
https://blog.csdn.net/u011684839/article/details/80221844

2,①根目录index.html 是唯一入口页面, webpack构建的文件js或CSS自动加入
  ②src目录main.js是唯一入口函数,其中<div id="app"></div> ,使用new Vue创建唯一Vue对象并填充到指定id="app"中
  ③src下的router目录index.js是唯一的路由配置, 对应main.js中引入路由和app.vue核心组件


3,①stylus中文网:https://stylus.bootcss.com/
  ②手动生成css: stylus --compress < test.styl > test.css
  ③在线css转less/sass/stylus工具 css编辑器: http://tools.jb51.net/code/css2less
  ④Stylus基本使用: https://www.jianshu.com/p/5fb15984f22d

4,WebStorm（2018版）-----eslint的配置和使用: https://blog.csdn.net/qq_29329037/article/details/80100450

5,轮播图地址:https://github.com/surmon-china/vue-awesome-swiper
  安装2.6.7版本:npm install vue-awesome-swiper@2.6.7 --save

6,使用 Mint UI库: http://mint-ui.github.io/docs/#/zh-cn2

7, !important 语法,提升指定样式条目的应用优先权

8,对比computed和watch
// computed定义方法,模板中可以直接使用'变量',不加() -->每8个分一组
  computed: {
    countPages () {
      const pages = []
      this.iconList.forEach((item, i) => {
        // 每8个一组
        const index = Math.floor(i / 8)
        // 是否包含下标
        if (!pages[index]) {
          pages[index] = []
        }
        pages[index].push(item)
      })
      return pages
    },
    showIcons () {
      return this.iconList.length
    }
  }
// watch是对data中的keyword监听变化,模板中可以直接使用'变量'
watch: {
  keyword () {
    // 传个父类
    this.$emit('searchKeyWord', this.keyword)
    if (!this.keyword) {
      return
    }
  }
}
9,定义一个mixins.styl混入样式,在组件中导入@import "~@styles/mixins.styl",直接调用 ellipse()
  ellipse()
     overflow hidden
     white-space nowrap
     text-overflow ellipsis

10, 在package.json中配置 --host 0.0.0.0   可在局域网ip通手机连接测试

11, 打包npm run build命令 会执行build/build.js 生成一个dist目录
    设置assetsPublicPath: '/travel' 文件存放服务器位置路径

12,rem和em区别
  em:是长度单位,参照当前元素的字号font-size大小; 没有设置,参照浏览器默认设置
  rem:是css3中的长度单位,参照根元素(html)的字号

13,UI设计图以iPhone6的750px的2倍图,实际上375pt点--> 1rem 对应在rest.css的html中font-size=50px
   例如: 在@1x基准图中 43px --> 1rem==>50px,  43/50=0.86rem 即在@2x图中 对应86px

14,在webpack.base.confi.js中配置,在vue中使用 @import "~@styles/varibles.styl"
    // 自动的扩展后缀，比如一个js文件，则引用时书写可不要写.js
    extensions: ['.js', '.vue', '.json'],
    // 创建路径的别名，比如增加'components': resolve('src/components')等
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      // 自定义别名
      '@styles':resolve('src/assets/styles')
     }
区别: /* 别名导入 */
     @import "~@styles/varibles.styl"
     /* 相对路径导入 */
     @import "../../../assets/styles/varibles.styl"

15,// 调用push返回指定路径
   this.$router.push('/')
   // 将router-link默认的a标签给为div, 用单引号拼接参数
   <router-link tag="div" :to="'/detail/'+item.id" />
   对应的router中添加: path: '/detail/:id',

16,flex 属性值可以包含三个参数：flex-grow，flex-shrink 和 flex-basis。
   第二个和第三个参数（flex-shrink 和 flex-basis）可选。
    (1)flex-grow属性: 定义项目的放大比例
    如果所有项目的flex-grow属性都为1，则它们将等分剩余空间
    如果一个项目的flex-grow属性为2，其他项目都为1
    (2)flex-shrink属性:定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
    (3)flex-basis属性:定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

17,在css里面，padding-top,padding-bottom,margin-top,margin-bottom取值为百分比的时候，参照的是父元素的宽度。
   比如：父元素宽度是100px, 子元素padding-top:50%，那么padding-top的实际值就是100*50%=50px

18,iconfont网站:https://www.iconfont.cn/
   使用:   <span class="iconfont">&#xe624;</span>

19,<!--判断是否有数据,调用自己<datail-list />递归-->
   <div v-if="item.children" class="item-children">
      <datail-list :categoryList="item.children"></datail-list>
   </div>

```
