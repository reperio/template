'use strict';
exports.__esModule = true;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const config = {
    entry: [
        './src/index.tsx'
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpg|cur)$/i,
                loader: 'url-loader', options: { limit: 8192 }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        new CopyWebpackPlugin(['./src/test.json'], { debug: 'info' }),
        new WebpackPwaManifest({
            name: 'Template',
            short_name: 'Template',
            description: 'Template Progressive Web App!',
            background_color: '#ff0000',
            theme_color: '#ff0000',
            icons: [
                {
                    src: path.resolve('src/assets/logo-icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                }
            ]
        })
    ]
};
module.exports = config;
