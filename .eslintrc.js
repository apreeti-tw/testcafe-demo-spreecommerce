module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': ['error', {'code': 120, 'ignoreStrings': true}],
  },
  'overrides': [{
    'files': ['*.js'],
    'rules': {
      'require-jsdoc': 'off',
    },
  }, {
    'files': ['./page-objects/pages/*.js', 'helper.js', './page-objects/components/*.js'],
    'rules': {
      'new-cap': 'off',
    },
  }],
};
