var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        "common": ["./src/page/common/index.js"],
        "index": ["./src/page/index/index.js"],
        "login": ["./src/page/login/index.js"]
    },
    output: {
        path: "D:\\workspaces\\E-CommerceWebsite_public_fe\\dist",
        filename: "js/[name].js"
    },
    externals: {
        // 使用页面脚本直接引用的脚本, 可以使用此方法通过编译, 在项目中可以直接require
        "jquery": "window.jQuery"
    },
    module: {
        /* old version
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ],*/
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "js/base.js"
        }),
        // css单独打包到文件里
        new ExtractTextPlugin("css/[name].css")
    ]
};

module.exports = config;