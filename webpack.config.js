const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssExtract = new ExtractTextPlugin('styles.css')

module.exports = (env) => {
    const isProd = env === 'production'

    return {
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
                    use: cssExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            cssExtract
        ],
        // sorce map --help for debugging-- it will reference to errors in the component file rather than bundle.js file
        // we have used different source map in dev and prod 
        devtool: isProd ? 'source-map' : 'inline-source-map',

        // a webpack dev server  such as live server
        // it does not make bundle.js file physically ,,but it loads from memory ,,which make server fast
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}



