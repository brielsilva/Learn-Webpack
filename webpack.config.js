'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname,'src','index.js'),
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,  // Evitar que o script do meu bundle seja carregado duas vezes,
                            // pois esse plugin injeta no fim do body o arquivo, mas isso foi
                            // injetado manualmente por mim no index.html 
            title: 'Development',
            hash: true,
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 3000,
    }
}