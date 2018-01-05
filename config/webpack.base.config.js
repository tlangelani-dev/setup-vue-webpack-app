const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, './../public'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: process.env.NODE_ENV === 'production'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './../public'),
        index: 'default.html',
        compress: true,
        port: 9001,
        overlay: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/app.css'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'default.html',
            template: 'public/index.html'
        })
    ]
};
