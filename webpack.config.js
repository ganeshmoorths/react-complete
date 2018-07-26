const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: { presets:['env'] }
                query: {
                    presets: [
                        'env'
                    ],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    },
    resolve: { extensions:['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public/'),
        publicPath: 'https://localhost:3000/dist/',
        hotOnly: true
    },
    plugins:[new webpack.HotModuleReplacementPlugin]
}