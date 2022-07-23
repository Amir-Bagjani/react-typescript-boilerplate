const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    devServer: {
        static: { directory: path.resolve(__dirname, '..', 'build')},
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Typescript Webpack Starter',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}