const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const publicPath = "./";
module.exports = {
    devtool: "cheap-module-source-map",
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "keemor.github.io",
            template: "src/index.ejs",
            filename: "index.html"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$|\.css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        watchContentBase: true,
        host: "localhost",
        historyApiFallback: {
            disableDotRule: true
        }
    }
};
