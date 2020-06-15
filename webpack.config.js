const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

process.env.NODE_ENV = 'development';

module.exports = [
  {
    mode: 'development',
    entry: './src/app.js',
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.node$/,
          use: 'node-loader',
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
      ]
    },
    resolve: {
      modules: [
        path.resolve('./src'),
        path.resolve('./node_modules')
      ]
    },
    devServer: {
      contentBase: resolveAppPath('src'),
      hot: true,
      port: 3000,
      publicPath: '/'
    },
    output: {
      path: resolveAppPath('dist'),
      publicPath: '/',
      filename: 'bundle.js'
    }
  },

]