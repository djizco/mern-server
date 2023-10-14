module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // enable rules
    'object-curly-newline': [2, {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    }],
    'import/order': [2, {
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],

    // override defaults
    'eqeqeq': [2, 'smart'],
    'max-len': [2, { code: 120, tabWidth: 2, ignoreUrls: true }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-cond-assign': [2, 'except-parens'],
    'no-multi-spaces': [2, {
      exceptions: {
        ImportDeclaration: true,
        Property: true,
        VariableDeclarator: true,
      },
    }],
    'prefer-destructuring': [2, {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'quote-props': [2, 'consistent-as-needed'],
    'space-before-function-paren': [2, 'never'],

    // disable defaults
    'arrow-parens': 0,
    'brace-style': 0,
    'consistent-return': 0,
    'func-names': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'padded-blocks': 0,
  },
};
