module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
    },
    rules: {
        // GENERAL
        radix: 0,
        'no-undef': 0,
        'new-cap': 0,
        'no-alert': 0,
        'no-console': 0,
        'func-names': 0,
        'no-plusplus': 0,
        'comma-dangle': 0,
        'no-unused-vars': 0,
        'no-param-reassign': 0,
        'consistent-return': 0,
        'no-use-before-define': 0,
        'class-methods-use-this': 0,

        // REACT
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/prefer-stateless-function': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],

        // JSX-A11Y
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/href-no-hash': 0,
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref', 'preferButton'],
            },
        ],

        // IMPORT
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,

        // REACT-HOOKS
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
