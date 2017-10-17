const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const publicPath = "./";
const webpack = require("webpack");

module.exports = {
    entry: ["./src/index.js"],
    output: {
        filename: "dist/bundle.js",
        publicPath: publicPath
    },
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
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new HtmlWebpackPlugin({
            title: "keemor.github.io",
            template: "src/index.ejs",
            filename: "index.html"
        })
    ]
};
