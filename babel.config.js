const MODULE_RESOLVER = [
    'module-resolver',
    {
        root: ['./src'],
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
            '.ios.ts',
            '.ios.js',
            '.android.ts',
            '.android.js',
        ],
        alias: {
            './': ['.'],
            '@src': './src',
            '@app': './src/app',
            '@pages': './src/pages',
            '@features': './src/features',
            '@entities': './src/entities',
            '@shared': './src/shared',
        },
    },
];

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    // env: {
    //     production: {
    //         plugins: [
    //             'transform-remove-console',
    //             MODULE_RESOLVER,
    //             'react-native-reanimated/plugin',
    //         ],
    //     },
    //     development: {
    //         plugins: [MODULE_RESOLVER],
    //     },
    // },
    plugins: [MODULE_RESOLVER, 'react-native-reanimated/plugin'],
};
