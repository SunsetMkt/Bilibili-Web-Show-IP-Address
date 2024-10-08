import defineConfig from '@antfu/eslint-config'

export default defineConfig({
    type: 'lib',
    markdown: true,
    yaml: false,
    stylistic: {
        indent: 4,
    },
    typescript: {
        overrides: {
            'ts/explicit-function-return-type': 'off',
        },
    },
    lessOpinionated: true,
}, {
    rules: {
        'curly': 'off',
        'no-console': 'off',
        'jsonc/indent': ['error', 2],
        'jsdoc/require-returns-description': 'off',
        'style/max-statements-per-line': 'off',
        'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'ts/method-signature-style': ['error', 'method'],
    },
})
