module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                bracketSpacing: false,
                jsxBracketSameLine: true,
                tabWidth: 4,
                printWidth: 120
            }
        ],
        'linebreak-style': ['warn', 'unix'],
        semi: ['error', 'always'],
        'no-unused-vars': ['warn', {varsIgnorePattern: '^h$'}],
        'no-console': 'off',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true,
                allowBind: false,
                ignoreRefs: true
            }
        ],
        'react/no-did-update-set-state': 'warn',
        'react/no-unknown-property': ['error', {ignore: ['class']}],
        'react/prop-types': 'off'
    }
};
