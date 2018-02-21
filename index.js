module.exports = {
  extends: 'standard',
  env: {
    'es6': true
  },
  parserOptions: {
    'ecmaVersion': 6
  },
  rules: {
    'array-callback-return': [2, { allowImplicit: true }],
    'arrow-parens': [2, 'as-needed'],
    'consistent-return': 2,
    'guard-for-in': 2,
    'no-else-return': 2,
    'no-return-await': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-await': 2
  }
}
