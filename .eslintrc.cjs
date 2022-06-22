module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:sonarjs/recommended',
        'plugin:promise/recommended',
        'prettier',
    ],
    plugins: [
        'optimize-regex',
        'sonarjs',
        'promise',
        'import',
        'lodash',
        'node',
        'unicorn',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        'prettier/prettier': 'error',
        'import/extensions': [0, { js: "always" }],
        indent: ['error', 4, { SwitchCase: 1 }],
    },
};
