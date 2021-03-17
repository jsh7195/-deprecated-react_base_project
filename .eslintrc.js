module.exports = {
  parser: 'babel-eslint',
  root: true,
  globals: {
    _: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-script-url': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-this-in-sfc': 'off', // editor
    'consistent-return': 'off',
    'react/no-array-index-key': 'off',
    '// eslint-disable-next-line import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'import/no-extraneous-dependencies' : 'off', 
  },
};
