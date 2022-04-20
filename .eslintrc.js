module.exports = {
  root: true,
  // ESLintにTypeScript syntaxを理解させる
  parser: '@typescript-eslint/parser',
  // 利用するプラグインを指定
  plugins: [
    // ESLintをTypeScriptで使うためのプラグイン
    '@typescript-eslint',
    'simple-import-sort',
  ],
  // 利用するベース設定を指定
  extends: [
    // ESLintが提供する推奨設定
    'eslint:recommended',
    // ↑の中でTypeScriptに不要なものをOFFにする設定 (TypeScriptの型チェックで事足りているもの)
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
    'plugin:@typescript-eslint/eslint-recommended',
    // TypeScriptで推奨されるものをONにする設定
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-optional-chaining': 0,
    'quotes': ['error', 'single'],
    'react/jsx-uses-react': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  }
};