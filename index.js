module.exports = {
    extends: 'airbnb',
    rules: {
        'arrow-body-style': ['off'],
        'arrow-parens': ['error', 'always'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'max-len': ['off'],
        'max-lines': ['off'],
        'max-statements': ['off'],
        'no-console': ['off'],
        'no-plusplus': ['off'],
        'no-unused-vars': ['off'],
        // to use `await` to denote a value that is a thenable, the proformace issue should be taken care of by compiler
        'no-return-await': ['off'],
        'no-script-url': ['off'],
        'global-require': ['off'],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'never'
            }
        ],

        // @see https://github.com/benmosher/eslint-plugin-import
        'import/no-extraneous-dependencies': ['off'],
        // disable this for redux connect @see https://github.com/benmosher/eslint-plugin-import/issues/544
        'import/no-named-as-default': ['off'],
        // disable this for redux connect @see https://github.com/benmosher/eslint-plugin-import/issues/544
        'import/no-named-as-default-member': ['off'],
        'import/prefer-default-export': ['off'],

        // @see https://github.com/evcohen/eslint-plugin-jsx-a11y
        'jsx-a11y/no-static-element-interactions': ['off'],

        // @see https://github.com/yannickcr/eslint-plugin-react
        'react/forbid-prop-types': ['off'],
        'react/prop-types': ['off'],
        'react/jsx-filename-extension': ['error', { 'extensions': ['.js'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-array-index-key': ['off'],
        'react/no-multi-comp': ['off'],
        'react/no-unescaped-entities': ['off'],
        'react/prefer-stateless-function': ['off']
    },
    env: {
        'browser': true
    },
    parser: 'babel-eslint',
    globals: {
        'require': true
    }
};
