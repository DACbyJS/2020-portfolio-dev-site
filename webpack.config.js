const path = require('path')
const miniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        site: ['./assets/javascripts/index.js', './assets/stylesheets/index.scss']
    },
    output: {
        filename: 'assets/javascripts/[name].js',
        path: path.resolve(__dirname, '.tmp/dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new miniCssPlugin({
            filename: 'assets/stylesheets/[name].css'
        })
    ]
}