const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
    DIST: path.resolve(__dirname, '../dist'),
    SRC: path.resolve(__dirname, '../src')
}

module.exports = {
    devServer: {
        overlay: true,
        // contentBase: paths.DIST,
        contentBase: path.resolve('./dist'),
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    entry: path.join(paths.SRC, 'index.js'),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        })
    ]
}

