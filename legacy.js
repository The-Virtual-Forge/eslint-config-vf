module.exports = {
    extends: [
        'eslint-config-vf/rules/best-practices',
        'eslint-config-vf/rules/errors',
        'eslint-config-vf/rules/legacy',
        'eslint-config-vf/rules/node',
        'eslint-config-vf/rules/style',
        'eslint-config-vf/rules/variables'
    ].map(require.resolve),
    env: {
        browser: true,
        node: true,
        amd: false,
        mocha: false,
        jasmine: false
    },
    ecmaFeatures: {},
    globals: {},
    rules: {}
};
