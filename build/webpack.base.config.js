const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { htmlPlugins, inputFiles } = require('../config/htmlPlugins.config'); //引入模板文件多页面配置
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    entry: inputFiles,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "../dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({ filename: "styles.css" })
    ],
    resolve: {
        alias: {
            '@common': path.resolve(__dirname, '../src/common'),
            '@lang': path.resolve(__dirname, '../src/lang'),
            '@scss': path.resolve(__dirname, '../src/scss'),
            '@template': path.resolve(__dirname, '../src/template'),
            '@images': path.resolve(__dirname, '../src/images'),
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [{ loader: 'file-loader', options: { limit: 1 * 1024, outputPath: 'img/' } }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },

            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        interpolate: true
                    }
                }]
            }

        ]
    }
};

// 合并基础配置，与模板文件配置
config.plugins = config.plugins.concat(htmlPlugins)

console.log(inputFiles)

module.exports = config