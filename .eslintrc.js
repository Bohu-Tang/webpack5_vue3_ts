module.exports = {
  root: true,
  // 环境
  env: {
    node: true,
    browser: true,

  },
  // 转换参数
  parserOptions: {
    parser: '@typescript-eslint/parser',// 解析 .vue 文件里面的 script 标签
    sourceType: "module",
    ecmaVersion: 12
  },
  // 插件配置
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  // 扩展
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    indent: ["warn", 2] // 缩进2空格，提示类型为警告
  }
}
