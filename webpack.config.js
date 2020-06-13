const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dirname } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        //Be possible go back pressing the "back" button at chrome
        historyApiFallback: true
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './public/index.html'
        })
    ]
}