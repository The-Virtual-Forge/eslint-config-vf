module.exports = {
    extends: [
        'eslint-config-vf/base',
        'eslint-config-vf/rules/strict',
        'eslint-config-vf/rules/react',
    ].map(require.resolve),
    rules: {}
};
