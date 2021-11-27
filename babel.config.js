const MODULE_RESOLVER = [
    'module-resolver',
    {
        root: './',
        extensions: [
            '.ts',
            '.ios.ts',
            '.android.ts',
            '.js',
            '.ios.js',
            '.android.js',
            '.json',
        ],
        alias: {
            '@root': '.',
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
    env: {
        production: {
            plugins: ['transform-remove-console', MODULE_RESOLVER],
        },
        development: {
            plugins: [MODULE_RESOLVER],
        },
    },
};
