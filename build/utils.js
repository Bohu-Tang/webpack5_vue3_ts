const path = require('path');
exports.resolve=function (dir){
    return path.join(__dirname, '..', dir)
}

exports.babelLoaderConf = {
    loader: 'babel-loader',
    options: {
        // 预处理设置
        presets: [
            // js预处理
            [
                '@babel/preset-env',
                {
                    // 转换目标
                    targets: {
                        browsers: ['ie>=8', 'chrome>=62'],
                        node: '8.9.0'
                    },
                    debug: false,// 是否打印preset-env对当前配置用了哪些插件，以及我们所支持的浏览器集合
                    useBuiltIns: 'usage', // 按需引入
                    corejs: '3.0', // corejs版本
                }
            ],
            // ts 预处理
            [
                '@babel/preset-typescript',
                {
                    allExtensions: true,// 支持所有文件扩展名，否则vue文件中使用ts会报错
                }
            ]
        ],
        // 插件配置
        plugins:[
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs:3
                }
            ]
        ]
    }
}