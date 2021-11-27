module.exports = {
    root: true,
    // Specifies the ESLint parser
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2021,
        // Allows for the use of imports
        sourceType: 'module',
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true,
        },
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect',
        },
    },
    plugins: ['@typescript-eslint', 'module-resolver'],
    extends: [
        // default lib for RN
        // '@react-native-community/eslint-plugin-react',
        'eslint:recommended',
        // Uses the recommended rules from @eslint-plugin-react
        'plugin:react/recommended',
        // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        // Uses prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:prettier/recommended',
        // Enables react hooks plugin
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    // env: {
    //     node: true,
    // },
};

