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
      // '@root': '.',
      // '@assets': './assets',
      // '@src': './src',
      // '@constants': './src/constants',
      // '@helpers': './src/helpers',
      // '@API': './src/helpers/API',
      // '@lib': './src/helpers/lib',
      // '@navigation': './src/helpers/navigation',
      // '@styleguide': './src/helpers/styleguide',
      // '@store': './src/store',
      // '@ui': './src/ui',
      // '@components': './src/ui/components',
      // '@screens': './src/ui/screens',
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
