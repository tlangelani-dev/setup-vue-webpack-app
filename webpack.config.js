const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, './public'),
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
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        compress: true,
        port: 9001,
        overlay: true
    }
};
