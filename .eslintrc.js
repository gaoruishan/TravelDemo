// https://eslint.org/docs/user-guide/configuring
/**
 * eslint配置文件
 一个用来识别ECMAScript 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格
 可以被配置的信息主要分为3类：

 Environments：你的 javascript 脚步将要运行在什么环境（如：nodejs，browser，commonjs等）中。
 Globals：执行代码时脚步需要访问的额外全局变量。
 Rules：开启某些规则，也可以设置规则的等级。
 * @type {{root: boolean, parserOptions: {parser: string}, env: {browser: boolean}, extends: string[], plugins: string[], rules: {'generator-star-spacing': string, 'no-debugger': string}}}
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 你的 javascript 脚步将要运行在什么环境（如：nodejs，browser，commonjs等）中
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // 需要lint * .vue文件
  plugins: [
    'vue'
  ],
  // 添加自定义规则
  rules: {
    // 允许异步等待
    'generator-star-spacing': 'off',
    // 在开发期间允许调试器
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
