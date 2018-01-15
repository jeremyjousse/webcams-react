const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
    DIST: path.resolve(__dirname, '../buid'),
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
        ],
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                plugins: [
                  // 'transform-class-properties',
                  // 'transform-es2015-classes',
                  // 'react-hot-loader/babel'
                ],
              }
            }
          },
          {
            test: /\.css/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader",
              options: {
                sourceMap: true,
              } }
            ]
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
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

