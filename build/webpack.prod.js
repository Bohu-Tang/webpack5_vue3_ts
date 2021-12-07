const {merge} = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = function (env, argv) {
    const nodeEnv = env.dev ? "development" : env.test ? "test" : "production";
    return merge(common, {
        mode: "production",
        devtool: "source-map",
        module: {
            rules:[],
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(nodeEnv),
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
            }),
        ],
        output:{
            path: resolve("dist"),
            filename: "js/[name].[hash].js",
            chunkFilename: "js/[name].[hash].js"
        }
    })
}