const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function (env, argv) {
    const isProduction =  argv.mode === 'production';
    return {
        entry: {
            index: ['@babel/polyfill', 'Js/index.js']
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'js/bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.(sc|c)ss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader?-url', // 不處理css中背景圖片的路徑
                        'postcss-loader', // autoprefix
                        'sass-loader',
                    ]
                }
            ]
        },
        resolve: {
            // 可省略副檔名
            extensions: ['.js', '.jsx'],
            // 路徑使用的別名宣告，可以減使用相對路徑
            alias: {
                Js: path.resolve(__dirname, 'src/js/'),
                Scss: path.resolve(__dirname, 'src/scss/'),
                Component: path.resolve(__dirname, 'src/js/component/')
            }
        },
        plugins: [
            // 提取CSS文件, 和style-loader無法共存
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),
            // 自動加入module
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDom: 'react-dom'
            }),
            new HtmlWebpackPlugin({
                template: 'src/template/index.html'
            })
        ],
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? '(none)' : 'source-maps'
    }
}