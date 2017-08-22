const path = require('path');

module.exports = {
    entry: './js/rindex.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "rindex.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ['env','react']
                }
            }]
        }]
    }
};