const {merge} = require('webpack-merge');
const {isProd} = require('./utils/env');
const baseConfig = require('./base');
const devConfig = require('./dev');
const prodConfig = require('./prod');

module.exports = function (env, args) {
    const result = isProd
        ? merge(baseConfig, prodConfig)
        : merge(baseConfig, devConfig);
    return result;
};
