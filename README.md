# eslint-config-vf

<!-- [![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg)](http://badge.fury.io/js/eslint-config-airbnb) -->

This package provides VF's .eslintrc as an extensible shared config. It is a modified version of Airbnb's ESLint config

## Usage

We export three ESLint configurations for your usage.

### eslint-config-vf

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-vf eslint-plugin-react eslint`
2. add `"extends": "vf"` to your .eslintrc

### eslint-config-vf/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-vf eslint`
2. add `"extends": "vf/base"` to your .eslintrc

### eslint-config-vf/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-vf eslint`
2. add `"extends": "vf/legacy"` to your .eslintrc

See [VF's Javascript styleguide](https://github.com/thevirtualforge/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
