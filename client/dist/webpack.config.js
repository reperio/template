import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
const config = {
    entry: [
        'core-js',
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
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })]
};
module.exports = config;
//# sourceMappingURL=webpack.config.js.map