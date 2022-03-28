const path = require('path');

const {rootDir} = require('../utils/env');

module.exports = {
    '@src': path.resolve(__dirname, '../../', './src'),
    '@components': path.resolve(__dirname, '../../', './src/components'),
    // "@images": path.resolve(__dirname, '../../',  "./src/assets/images"),
    // "@styles": path.resolve(__dirname, '../../',  "./src/style"),
};
