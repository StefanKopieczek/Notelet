const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = false;

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: isProduction ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: isProduction ? "production" : "development",
                    },
                },
            },                      
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Notelet',
            template: 'src/index.html',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};