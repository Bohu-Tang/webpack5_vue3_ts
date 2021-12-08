const {merge} = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");
const {resolve} = require('./utils.js');
// 引入打包分析工具
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function (env, argv) {
  // 打包分析工具配置
  const analyzerPlugins = env.analyzer ? [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      //   generateStatsFile: true,
      reportFilename: resolve("./report/report.html"),
      statsFilename: resolve("./report/stats.json"),
    })
  ] : []
  // 判断当前环境
  const nodeEnv = env.dev ? "development" : env.test ? "test" : "production";
  return merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
      rules: [],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(nodeEnv),
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      // 打包分析插件
      ...analyzerPlugins,
    ],
    output: {
      path: resolve("dist"),
      filename: "js/[name].[hash].js",
      chunkFilename: "js/[name].[hash].js"
    }
  })
}
