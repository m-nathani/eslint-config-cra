module.exports = {
  // https://github.com/prettier/eslint-plugin-prettier
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y'],
  // NOTE: need to disable the babelOptions for "babel-preset-react-app", as it was breaking due to a bug in CRA5
  // For more info: https://github.com/facebook/create-react-app/issues/12070
  // Remove the below parserOptions when its fixed
  parserOptions: {
    babelOptions: {
      presets: [['babel-preset-react-app', false], 'babel-preset-react-app/prod'],
    },
  },
  rules: {
    // NOTE: to be same as the "@umai/prettier-config" to make sure we follow the prettier rules using eslint
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off',
    'function-paren-newline': 'off',
    'arrow-parens': [0, 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'template-curly-spacing': 'off',
    'max-len': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'react/self-closing-comp': 0,
    'class-methods-use-this': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/function-component-definition': 0,
    'no-plusplus': 'off',
  },
  settings: {
    'import/core-modules': [
      '@apis',
      '@api',
      '@actions',
      '@assets',
      '@components',
      '@constants',
      '@containers',
      '@hooks',
      '@images',
      '@locales',
      '@mocks',
      '@pages',
      '@reducers',
      '@routes',
      '@services',
      '@store',
      '@redux-store',
      '@styles',
      '@tests',
      '@utils',
      '@validations',
      '@workers',
    ],
  },
  ignorePatterns: ['config/', 'scripts/', 'public/'],
};
