const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill","./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash].js",
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({template: "./src/index.html"})
    ],
    devServer: {
        historyApiFallback: true,
        static: "./src",
        port: 9000,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  ["babel-loader"]
            },
        ]
    }
}