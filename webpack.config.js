// entry point
// output final bundle file

const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            //  for loading css
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    // sorce map --help for debugging-- it will reference to errors in the component file rather than bundle.js file
    devtool: 'cheap-module-eval-source-map',

    // a webpack dev server  such as live server
    // it does not make bundle.js file physically ,,but it loads from memory ,,which make server fast
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}


