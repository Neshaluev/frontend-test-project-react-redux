const path = require('path');

const rules = require('./config/rules');
const {ProvidePlugin, DefinePlugin} = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {
    rootDir,
    webpackDir,
    isDev,
    isDevServer,
    isProd,
    mode,
} = require('./utils/env');

const aliasItems = require('./config/alias');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '..', './src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        publicPath: undefined,
        filename: '[name].[fullhash].js',
    },
    module: {
        rules: [...rules],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new ProvidePlugin({}),
        new DefinePlugin({
            // "process.env": {
            //   NODE_ENV: JSON.stringify(mode),
            // },
            IS_PROD: isProd,
            IS_DEV: isDev,
            IS_DEV_SERVER: isDevServer,
        }),
        // new ForkTsCheckerWebpackPlugin({
        //   async: isDev,
        //   typescript: {
        //     configFile: join(rootDir, "./tsconfig.json"),
        //   },
        //   eslint: { enabled: true, files: "../src/**/*.{ts,tsx,js,jsx}" },
        // }),
        // new ESLintPlugin({
        //   context: join(rootDir, "./src"),
        //   extensions: ["js", "jsx", "ts", "tsx"],
        // }),
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
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    },
    resolve: {
        alias: aliasItems,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};
