const path = require('path');

const {rootDir} = require('../utils/env');

module.exports = function () {
    return {
        '@src': path.resolve(__dirname, '../../', '/src'),
        '@images': path.resolve(__dirname, '../../', '/src/images'),
        '@styles': path.resolve(__dirname, '../../', '/src/styles'),
        '@components': path.resolve(__dirname, '../../', '/src/components'),
    };
};
