const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot',
            axios: 'axios',
            createStore: ['redux', 'createStore'],
            applyMiddleware: ['redux', 'applyMiddleware'],
            thunkMiddleware: ['redux-thunk', 'default'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(["dist"])
    ]
}