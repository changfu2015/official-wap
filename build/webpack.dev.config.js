const webpack = require('webpack')
const path = require("path")
const marge = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.config');

module.exports = marge(baseWebpackConfig, {

        devServer: {
            contentBase: path.join(__dirname, '../dist'),
            compress: true,
            port: 9000,
            //服务器ip
            host: 'localhost'
        },
        devtool: '#cheap-module-eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: "dev"
                }
            }),
        ]
    }

)