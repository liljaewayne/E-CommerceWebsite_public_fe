var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 获取html-webpack-plugin参数
 * @param name
 * @returns {{template: string, filename: string, inject: boolean, hash: boolean, chunks: *[]}}
 */
var getHtmlConfig = function (name) {
    return {
        template: "./src/view/" + name + ".html",
        filename: "view/" + name + ".html",
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
}

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
            },
            {
                test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,

                /*use: [
                    "url-loader?limit=10&name=resource/[name].[ext]"
                ]*/
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100,
                            name: "resource/[name].[ext]"
                        }
                    }
                ]
            }
        ]

    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "js/base.js"
        }),
        // css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html模板处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]
};

module.exports = config;