import webpack from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import OfflinePlugin from "offline-plugin";
import { getIfUtils, removeEmpty } from "webpack-config-utils";
//https://medium.com/@ryandrewjohnson/one-webpack-config-to-rule-them-all-environments-that-is-277457769779

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default env => {
    const { ifProd, ifNotProd, ifTest } = getIfUtils(env);

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
        resolve: {
            extensions: [".js"],
            alias: {
                ["~"]: resolve(__dirname, "src")
            }
        },
        plugins: removeEmpty([
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(ifProd("production", "development"))
            }),
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
            new HtmlWebpackPlugin({
                title: "keemor.github.io",
                template: "src/index.ejs",
                filename: "index.html"
            }),
            new OfflinePlugin({
                ServiceWorker: {
                    events: true
                }
            }),
            ifTest(new BundleAnalyzerPlugin())
        ]),
        devServer: {
            host: "localhost",
            port: 3333,
            watchContentBase: true,
            historyApiFallback: true
        }
    };
};
