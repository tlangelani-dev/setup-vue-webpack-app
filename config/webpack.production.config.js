const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
});
