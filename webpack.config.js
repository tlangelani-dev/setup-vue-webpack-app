const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        compress: true,
        port: 9001
    }
};
