import * as path from 'path';
import {Configuration} from 'webpack';

const config : Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'typescript',
                        'es2015',
                        'react'
                    ]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
export default config;