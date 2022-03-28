const path = require('path');

module.exports = [
    // ts
    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
        },
        exclude: /node_modules/,
    },
    // js
    {
        test: /\.(js|jsx)$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(
                        __dirname,
                        '../../',
                        './.babelrc.js',
                    ),
                },
            },
        ],
        exclude: /node_modules/,
    },
    // html
    {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader',
        },
    },
    // image
    {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },
    // font
    {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
    },
    // css
    {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader',
                options: {
                    esModule: false,
                },
            },
            {loader: 'css-loader'},
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: path.resolve(__dirname, './postcss.js'),
                    },
                    sourceMap: true,
                },
            },
        ],
    },
    //sass
    {
        test: /\.s([ca])ss$/,
        exclude: /\.module.scss$/,
        use: [
            {
                loader: 'style-loader',
                options: {
                    esModule: false,
                },
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: path.resolve(__dirname, './postcss.js'),
                    },
                    sourceMap: true,
                },
            },
            {
                loader: 'resolve-url-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    // Prefer `dart-sassRules`
                    implementation: require('sass'),
                },
            },
            // {
            //   loader: "sass-resources-loader",
            //   options: {
            //     resources: [],
            //   },
            // },
        ],
    },
    // sass module
    {
        test: /\.module\.s([ca])ss$/,
        use: [
            {
                loader: 'style-loader',
                options: {
                    esModule: false,
                },
            },
            {
                loader: 'css-loader',
                options: {
                    esModule: false,
                    modules: {
                        exportLocalsConvention: 'camelCaseOnly',
                        localIdentName: '[local]__[contenthash:base64:5]',
                    },
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: path.resolve(__dirname, './postcss.js'),
                    },
                    sourceMap: true,
                },
            },
            {
                loader: 'resolve-url-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    // Prefer `dart-sassRules`
                    implementation: require('sass'),
                },
            },
            // {
            //   loader: "sass-resources-loader",
            //   options: {
            //     resources: [],
            //   },
            // },
        ],
    },

    // SVG
    {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    },
];
