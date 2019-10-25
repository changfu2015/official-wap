const webpack = require('webpack')
const path = require("path")
const marge = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.config');

module.exports = marge(baseWebpackConfig, {}

)