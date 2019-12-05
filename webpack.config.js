let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');

// 1) cleanWebpackPlugin
// 2) copyWebpackPlugin
// 3) bannerPlugin 内置
module.exports = {
  mode: 'production',
  entry: { home: './src/index.js', },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    // 3) 由服务端 不用用代理来处理 能不能再服务端中启动webpack 端口用webpack端口

    // 2) 我们前端只想单纯来模拟数据
    // before(app){ // 提供的方法 钩子
    //   app.get('/user', (req, res) => {
    //     res.json({name: '后端返回-before'})
    //   })
    // }

    // 1)
    // proxy: { // 重写的方式 把请求代理到express服务器上
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrte: {'/api': ''}
    //   } // 配置了i一个代理
    // }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([ // 拷贝插件
    //   { from: './doc', to: './' }
    // ]),
    // new webpack.BannerPlugin('make 2019 by HongBaojin')
  ]
}