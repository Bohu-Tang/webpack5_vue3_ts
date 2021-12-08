const {merge} = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");
const {resolve} = require('./utils.js');
const chalk = require('chalk')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const devWebpackConfig = merge(common, {
  mode: 'development',// 打包模式-开发模式
  devtool: "eval-cheap-module-source-map",// 开启sourcemap
  module: {
    rules: [
      // 样式loader vue-style-loader | postcss-loader | sass-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 使用postcss-preset-env给css添加浏览器兼容性前缀
                plugins: ["postcss-preset-env"]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `	
                              @use "@/styles/variables.scss" as *;  // 全局导入sass变量
                              @use "@/styles/mixin.scss" as *; // 全局导入sass混入
                            `,
            }
          }
        ]
      },

    ]
  },
  output: {
    path: resolve("dist"),// 输出目录
    filename: "js/[name].[hash].js",// 输出文件名
    chunkFilename: "js/[name].[hash].js", // 分包文件名
    publicPath: "/" // 公共资源目录
  },
  stats: "errors-warnings",// 日志只打印错误和警告
  // 开发环境服务器配置
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: {//history模式路由兼容
      rewrites: [
        {
          from: /.*/g,
          to: "index.html"
        }
      ]
    },
    allowedHosts: 'all',// 允许所有域名请求
    port: 3000, // 服务器端口
    open: false, // 自动打开浏览器
    hot: true, // 是否开启热更新（不配置此项其实也是默认开启的）
    client: {
      progress: true,// 将运行进度显示到控制台
      overlay: {
        warnings: false,// 警告时不需要全屏显示错误
        errors: true// 发生错误时全屏显示错误
      },
    },
    compress: true, // 为所有服务启用gzip压缩
    proxy: {
      // 代理设置
      // "api": {
      //     target: "...",
      //     changeOrigin: true,
      //     pathRewrite: {
      //         "^/api": ""
      //     }
      // }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env":{
        NODE_ENV: JSON.stringify("development")
      },
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
})

devWebpackConfig.plugins.push(
  // 进度条
  new ProgressBarPlugin({
    format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    clear: true,
  }),
  // 错误提示
  new FriendlyErrorsWebpackPlugin({
    // 成功的时候输出
    compilationSuccessInfo: {
      messages: [
        `Your application is running here: http://${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`,
      ],
    },
    // 是否每次都清空控制台
    clearConsole: true,
  })
)

module.exports = devWebpackConfig;
