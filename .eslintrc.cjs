module.exports = {
  root: true, // ESLint がこの設定ファイルより上位のディレクトリを検索しないようにします。
    env: {
    browser: true,    // ブラウザのグローバル変数を使用可能に
    es2021: true,     // ES2021の構文を有効化
    node: true,       // Node.jsのグローバル変数を使用可能に
  },
  extends: [
    'eslint:recommended', // ESLint の推奨ルールセットを適用します。
    'plugin:@typescript-eslint/recommended', // TypeScript の推奨ルールセットを適用します（TypeScript を使用している場合）。
    'plugin:react/recommended',            // React の推奨ルールセットを適用します。
    'plugin:react-hooks/recommended',      // React Hooks の推奨ルールセットを適用します。
    'plugin:prettier/recommended', // Prettier を ESLint のルールとして使用するための設定です。
    'prettier'
  ],
  parser: '@typescript-eslint/parser', // TypeScript コードをパースするためのパーサーを指定します（TypeScript を使用している場合）。
  parserOptions: {
    ecmaFeatures:{
      jsx: true
    },
    ecmaVersion: 'latest', // 最新の ECMAScript バージョンを許可します。
    sourceType: 'module',  // ES モジュールを許可します。
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  rules: {
    // ここにプロジェクト固有の ESLint ルールを追加します。
    // 例:
    '@typescript-eslint/explicit-module-boundary-types': 'off',  // 関数の戻り値の型を明示的に指定する必要なし
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用変数をエラーに
  },
};