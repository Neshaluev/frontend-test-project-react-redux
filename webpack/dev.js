const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: {
        client: {
            overlay: false,
        },
        headers: {'Access-Control-Allow-Origin': '*'},
        historyApiFallback: true,
        hot: true,
        static: {
            publicPath: '/',
        },
    },
};
