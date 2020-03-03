module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'import', 'node'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],
  },
}
