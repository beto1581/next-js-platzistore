module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': ['error', 'always'],
    "prettier/prettier":[
      "error",
      {
         "endOfLine":"auto",
         "printWidth":80,
         "trailingComma":"es5",
         "semi":false,
         "doubleQuote":true,
         "jsxSingleQuote":true,
         "singleQuote":false,
         "useTabs":false,
         "tabWidth":4
      }
   ],
  }
}