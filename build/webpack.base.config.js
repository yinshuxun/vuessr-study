import path from 'path'
import vueConfig from './vue-loader.config.js'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isProd =  process.evn.NODE_ENV === 'production'

export default {
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
