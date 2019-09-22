const path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './index.jsx',
    output: {
        path: __dirname + './dist',
        filename: 'bundle.js'
    },

    devServer: {
        inline: false,
        publicPath: '/',
        contentBase: __dirname + "/public/",
        hot: true,

    },
    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/,

            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',

                options: {
                    presets: [
                        "@babel/preset-env", "@babel/preset-react"
                    ]
                }
            }]
        }]
    }
};