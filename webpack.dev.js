var path = require('path');
var webpack = require('webpack');
var productVersion = '201806041502';
var HappyPack = require('happypack');

var devConfig = {
    devtool: 'source-map',
    entry: [
      'webpack-hot-middleware/client?noInfo=true&reload=false',
      './app/index'
    ],
    output: {
      path: __dirname + '/output/ui/',
      filename: 'bundle.js',
      publicPath: '/output/ui/',
      chunkFilename: '[name].chunk.js?v=' + productVersion,
    },
    plugins: [
      new HappyPack({
        id: 'js',
        cache: true,
        loaders: [{
          path: 'babel-loader',
          query: {
            plugins: [
              "transform-runtime", "transform-decorators-legacy", "add-module-exports"
            ],
            presets: ['es2015', 'react', "stage-0"],
            cacheDirectory: true
          }
        }],
        threads: 6
      }),
      new webpack.HotModuleReplacementPlugin(),
    //   new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     // manifest: require("./manifest.json"),
    //     // name:'common'
    //   }),
    //   new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    ],
    resolve: {
      extensions: ['.js']
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
    }
  };


  module.exports = devConfig;