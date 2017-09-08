const path = require('path')
const vueConfig = require('./vue-loader.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd =  process.env.NODE_ENV === 'production'

module.exports = {
  entry:{
    app:"../src/app.js"
  },
  output:{
    filename:'[name].[chunkhash].js',
    path:path.resolve(__dirname,'../dist')
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              use: 'css-loader?minimize',
              fallback: 'vue-style-loader'
            })
          : ['vue-style-loader', 'css-loader']
      }
    ]
  },
}
