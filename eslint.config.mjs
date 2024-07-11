export default [
    {
        languageOptions: {
            globals: globals.node
        },
        rules: {
            'no-redeclare': 'off',
            'eslint-plugin/require-meta-docs-url':
                ['error', { 'pattern': 'https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/{{name}}.md' }],
            'eslint-plugin/require-meta-docs-description': 'error',
            'eslint-plugin/meta-property-ordering': 'error',
            'eslint-plugin/test-case-property-ordering': 'error',
            'n/no-extraneous-require':
                ['error', { 'allowModules': ['jest-config'] }],
            'mocha/no-mocha-arrows': 'off',
            'mocha/no-setup-in-describe': 'off'
        }
    },
]