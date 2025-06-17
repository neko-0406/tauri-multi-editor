module.exports = {
  root: true, // ESLint がこの設定ファイルより上位のディレクトリを検索しないようにします。
  extends: [
    'eslint:recommended', // ESLint の推奨ルールセットを適用します。
    'plugin:@typescript-eslint/recommended', // TypeScript の推奨ルールセットを適用します（TypeScript を使用している場合）。
    'plugin:react/recommended',            // React の推奨ルールセットを適用します。
    'plugin:react-hooks/recommended',      // React Hooks の推奨ルールセットを適用します。
    'plugin:prettier/recommended', // Prettier を ESLint のルールとして使用するための設定です。
  ],
  parser: '@typescript-eslint/parser', // TypeScript コードをパースするためのパーサーを指定します（TypeScript を使用している場合）。
  parserOptions: {
    ecmaVersion: 'latest', // 最新の ECMAScript バージョンを許可します。
    sourceType: 'module',  // ES モジュールを許可します。
  },
  plugins: [
    // 必要に応じて追加します（例: 'react'、'vue' など）。
    // 'react',
    // 'vue',
  ],
  rules: {
    // ここにプロジェクト固有の ESLint ルールを追加します。
    // 例:
    // 'no-unused-vars': 'warn', // 未使用の変数を警告として扱います。
    // 'prettier/prettier': 'error', // Prettier の整形ルールに違反した場合はエラーとします。
  },
};