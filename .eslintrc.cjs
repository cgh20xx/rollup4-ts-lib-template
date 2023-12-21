module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 以下有順序性的
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // npm install eslint-plugin-prettier --save-dev
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off'
  }
};
