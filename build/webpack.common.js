// 文件路径处理方法
const { resolve, babelLoaderConf } = require('./utils.js')

// 插件引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueLoader = require('vue-loader');

// 打包配置
module.exports = {
    // 入口
    entry: {
        app: resolve('src/index.ts')
    },
    // 解析配置
    resolve: {
        // 文件解析顺序
        extensions: [".js", ".vue", ".json", ".ts", ".tsx", ".mjs"],
        // 路径别名设置
        alias: {
            "@": resolve("src")
        }
    },
    // 模块配置
    module: {
        rules: [
            // vue文件loader
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                },
                include: /(src)/
            },
            // ts/js文件loader - babel配置
            {
                test: /\.(ts|js)x?$/,
                use: [babelLoaderConf],
                exclude: /node_modules/ //排除node_modules中的文件
            },
            // 图片资源加载配置
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
                type: 'asset', // 使用webpack5提供的内置模块，可以不用再安装file-loader、url-loader、raw-loader了
                parser: {
                    dataUrlCondition:{
                        maxSize: 10 * 1024, // 小于10kb的图片会被转换成base64,否则图片会被生成到输出的目录中
                    }
                },
                generator: {
                    filename: 'images/[base]'// 打包后图片生成的位置和文件名
                },
                exclude: [resolve('src/assets/svg')] // 不处理的文件目录
            },
            // 字体加载配置
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'files/[base]'
                }
            },
            // 媒体文件配置
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'media/[base]'
                }
            }

        ]
    },
    // 插件配置
    plugins: [
        new vueLoader.VueLoaderPlugin(),// vue-loader插件
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve("public/index.html"),
            favicon: resolve("public/favicon.ico"),
            inject: true
        })
    ]
}

