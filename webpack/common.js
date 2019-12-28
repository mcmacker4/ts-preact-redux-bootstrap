const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "letroso.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'react': 'preact/compat',
            'react-dom': 'preact/compat'
        }
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}