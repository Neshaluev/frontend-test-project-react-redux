const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {ProvidePlugin, DefinePlugin} = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const aliasItems = require('./config/alias');
const rules = require('./config/rules');

module.exports = {
    target: ['web', 'es5'],
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '..', './src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        publicPath: './',
        filename: '[name].[contenthash].js',
    },
    resolve: {
        alias: aliasItems,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [...rules],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', './src/assets'),
                    to: 'assets',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({})],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
