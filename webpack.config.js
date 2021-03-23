const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports= {
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
        }),
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename: "./index.html"
        }),
    ]
}