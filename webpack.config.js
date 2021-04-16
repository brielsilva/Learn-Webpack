'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const  webpack  = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const options = require('./options');

module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname,'src','index.js'),
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.js$/, use: [ {loader: 'babel-loader'}], exclude: /node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,  // Evitar que o script do meu bundle seja carregado duas vezes,
                            // pois esse plugin injeta no fim do body o arquivo, mas isso foi
                            // injetado manualmente por mim no index.html 
            title: 'Development',
            hash: true,
            hot: true,
            template: "./src/index.html",
            filename: "index.html",
        }),
        new ESLintPlugin(options)
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 3000,
    }
}