const path = require("path");
const templates = require('./template.config');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let inputFiles = {},
    htmlPlugins = [];
if (templates && typeof templates === 'object') {
    for (let key in templates) {
        item = templates[key]
        if (templates.hasOwnProperty(key) && item && typeof item.name === 'string') {
            inputFiles[item.name] = path.resolve(item.entry)
            htmlPlugins.push(new HtmlWebpackPlugin({
                title: item.title,
                filename: `${item.name}.html`,
                template: `./${item.template}`,
                chunks: [item.name],
                favicon: path.join(__dirname, '../src/images/favicon.ico'),
                hash: true
            }))
        }
    }
}

exports.htmlPlugins = htmlPlugins;
exports.inputFiles = inputFiles;