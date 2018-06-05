const path = require('path');
const webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');  // 生成html文件

/****项目相关配置(app-config)****/
const APP_NAME_EN = 'demo-test';
const APP_NAME_CN = '演示demo';
const APP_ASSETS = 'assets/' + APP_NAME_EN;
const APP_TEMPLATE = 'template/' + APP_NAME_EN;


module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        app: './index.js',
    },
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, './output'),
        // 输出文件名
        filename: APP_ASSETS + '/[name].min.js?[hash]',
        // cmd、amd异步加载脚本配置名称
        chunkFilename: APP_ASSETS + '/[name].chunk.js?[hash]',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=env&presets[]=react'
        }, {
            test: /\.less?$/,
            loaders: [
                'style-loader',
                'css-loader',
                'less-loader?{"sourceMap":false}'
              ],
            exclude: /\.useable\.less$/
        }, {
            test: /\.css?$/,
            loaders: [
                'style-loader',
                'css-loader'
              ],
            exclude: /\.useable\.less$/
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url-loader',
            query: {
              limit: 10240
            },
            exclude: /node_modules/,
          }]
    },
    // 生成sourcemap,便于开发调试
    devtool: '',
    plugins: [
        new HtmlwebpackPlugin({
            title: APP_NAME_CN,
            template: path.join(__dirname, './index.html'),
            filename: APP_TEMPLATE + '/index.html',
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: APP_ASSETS + '/commons.js?[hash]',
            minChunks: 2 // 检测被引用两次即被抽离出来
        }),
    ]
};