const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Подключили к проекту плагин

const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин
const isDev = process.env.NODE_ENV === 'development';
// создаем переменную для development-сборки
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

 
module.exports = {
    entry: {
        main: './src/main-page.js',
        about: './src/about-page.js',
     },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
        { // тут описываются правила
            test: /\.js$/, // регулярное выражение, которое ищет все js файлы
            exclude: /node_modules/, // исключает папку node_modules
            use: { 
                loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
        },
        {
            test: /\.css$/i,
            use: [
                (isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 
                {
                    loader:'css-loader',
                    options: {
                        importLoaders: 2
                    } 
                }, 
                'postcss-loader'
            ]
        },
        
        {
            test: /\.(gif|png|jpe?g|svg|ico|svg|webp)$/,
            use: [
                'file-loader?name=./images/[name].[ext]',
                {
                    loader: 'image-webpack-loader',
                    options: {},
                },
            ],
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]'
        } 
        ]
    },
    plugins: [
        new CleanWebpackPlugin (),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: true,
            template: './src/main-page.html',
            filename: 'main-page.html',
            chunks: ['main-page.html'],
        }),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: true,
            template: './src/about-page.html',
            filename: 'about-page.html',
            chunks: ['about-page.html'],
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
        /*new MiniCssExtractPlugin({
            filename: 'about-page.[contenthash].css'
        }),*/
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        
        new WebpackMd5Hash(),
        
           
    ] 
};