const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.join(__dirname, 'public')
var APP_DIR = path.join(__dirname, 'src')

module.exports = {
  devtool: 'source-map',
  entry: APP_DIR + '/index.tsx',
  output: {
    sourceMapFilename: './[file].map[query]',
    pathinfo: true,
    path: BUILD_DIR,
    filename: process.env.mode == 'development' ? '[name].js' : 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.json'),
              allowTsInNodeModules: true
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "components": path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ],
}
