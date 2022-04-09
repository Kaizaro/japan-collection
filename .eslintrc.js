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
    plugins: ['@typescript-eslint', 'eslint-plugin-import', 'module-resolver'],
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
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-explicit-any': 'error',
        'no-shadow': 0,
        'import/newline-after-import': ['warn', {count: 1}],
        'sort-imports': [
            'warn',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
                allowSeparatedGroups: true,
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'sibling', 'index', 'parent', 'unknown', 'type', 'object'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'react-native',
                        group: 'builtin',
                    },
                    {
                        pattern: 'react**',
                        group: 'external',
                    },
                    {
                        pattern: '@react**',
                        group: 'external',
                    },
                    {
                        pattern: 'react-native**',
                        group: 'external',
                    },
                    {
                        pattern: '@mobility/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@app/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@shared/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@src/**',
                        group: 'index',
                    },
                    {
                        pattern: './helpers/**',
                        group: 'parent',
                    },
                    {
                        pattern: '@helpers/**',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '@modules/**',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '@hooks/**',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '@store',
                        group: 'object',
                        position: 'before',
                    },
                    {
                        pattern: '@constants/**',
                        group: 'object',
                        position: 'before',
                    },
                    {
                        pattern: '@storeSlices/**',
                        group: 'object',
                    },
                    {
                        pattern: '@theme',
                        group: 'object',
                    },
                    {
                        pattern: '@appTheme/**',
                        group: 'object',
                    },
                    {
                        pattern: './styles',
                        group: 'object',
                    },
                    {
                        pattern: '@navigationTypes**',
                        group: 'type',
                        position: 'before',
                    },
                    {
                        pattern: '@storeTypes/**',
                        group: 'type',
                    },
                    {
                        pattern: './types',
                        group: 'type',
                    },
                    {
                        pattern: '@assets/**',
                        group: 'object',
                        position: 'after',
                    },
                    {
                        pattern: '@graphics/**',
                        group: 'object',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'desc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
            },
        ],
    },
    globals: {
        __DEV__: true,
    },
};
