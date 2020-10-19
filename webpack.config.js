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
        analytics: './src/analytics.js'
     },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    /*devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },*/
    
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
            test: /\.(gif|png|jpe?g|ico|svg|webp)$/,
            use: [
                
                'file-loader?name=./images/[name].[ext]&esModule=false',
                {
                    loader: 'image-webpack-loader',
                    options: {},
                },
            ],
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]&esModule=false'
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
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: true,
            template: './src/about-page.html',
            filename: 'index.html',
            chunks: ['about'],
        }),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: true,
            template: './src/analytics.html',
            filename: 'index.html',
            chunks: ['analytics'],
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