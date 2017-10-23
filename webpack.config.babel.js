import webpack from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import { getIfUtils, removeEmpty } from "webpack-config-utils";
//https://medium.com/@ryandrewjohnson/one-webpack-config-to-rule-them-all-environments-that-is-277457769779

export default env => {
    const { ifProd, ifNotProd } = getIfUtils(env);

    return {
        devtool: ifNotProd("cheap-module-source-map"),
        entry: ["./src/index.js"],
        output: {
            filename: "./dist/bundle.js"
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
        plugins: removeEmpty([
            ifProd(
                new webpack.DefinePlugin({
                    "process.env.NODE_ENV": JSON.stringify("production")
                })
            ),
            ifProd(
                new webpack.optimize.UglifyJsPlugin({
                    ie8: false,
                    ecma: 8,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    parallel: {
                        cache: true,
                        workers: 2
                    }
                })
            ),
            ifProd(
                new CompressionPlugin({
                    asset: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.(js)$/,
                    deleteOriginalAssets: true
                })
            ),
            new HtmlWebpackPlugin({
                title: "keemor.github.io",
                template: "src/index.ejs",
                filename: "index.html"
            })
        ]),
        devServer: {
            host: "localhost",
            watchContentBase: true,
            historyApiFallback: true
        }
    };
};
