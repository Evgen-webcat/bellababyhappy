var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        dependencies: './src/js/dependencies.js',
        app: glob.sync('./src/js/app/*.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        url: false
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader"
                }]
            })
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new OptimizeCssnanoPlugin({
            cssnanoOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }]
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/catalog.html',
            filename: 'catalog.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/news.html',
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/buy.html',
            filename: 'buy.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/contacts.html',
            filename: 'contacts.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/single.html',
            filename: 'single.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/single-news.html',
            filename: 'single-news.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/registration.html',
            filename: 'registration.html'
        }),
        new copyWebpackPlugin([{
            from: './src/fonts',
            to: './fonts'
        },{
            from: './src/images',
            to: './images'
        }])
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        open: true
    }
}
