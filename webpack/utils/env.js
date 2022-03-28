const path = require('path');

module.exports = function () {
    return {
        mode: process.env.NODE_ENV ?? 'production',
        isDevServer: process.env.WEBPACK_IS_DEV_SERVER === 'true',
        isProd: mode === 'production',
        isDev: !isProd,
        rootDir: path.resolve(__dirname, '../../'),
        webpackDir: path.resolve(__dirname, '../'),
        defaultPort: 8080,
    };
};
