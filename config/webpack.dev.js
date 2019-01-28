const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const Jarvis = require("webpack-jarvis");

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();
module.exports = () => {

    return {
        entry: {
            main: "./src/app.js",
        },
        output: {
            path: path.join(__dirname, "..", "public", ),
            filename: "bundle.js",
            chunkFilename: "[name].js"
        },
        mode: "production",
        devtool: "source-map",
        devServer: {
            contentBase: path.join(__dirname, "..", "public"),
            historyApiFallback: true,
            publicPath: "/",
            watchContentBase: true,
            overlay: true
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {

                    }
                },
                exclude: /node_modules/
            }]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    vendors: false,

                    vendor: {
                        chunks: "all",
                        test: /node_modules/,
                        name: "vendor",
                        priority: 20,
                    },
                    common: {
                        name: 'common',
                        minChunks: 2,
                        chunks: 'async',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            },
        },
        plugins: [
            
            new Jarvis({
                // port:5000
            }),
        ]
    }

}