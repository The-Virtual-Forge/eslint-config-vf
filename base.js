module.exports = {
    extends: [
        'eslint-config-vf/legacy',
        'eslint-config-vf/rules/es6',
    ].map(require.resolve),
    rules: {}
};
