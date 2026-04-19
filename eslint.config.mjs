// import stylistic from '@stylistic/eslint-plugin'
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
// import tseslint from 'typescript-eslint'
// import reactPlugin from 'eslint-plugin-react'
// import { defineConfig } from 'eslint/config'

// export default defineConfig([
//   {
//     ignores: ['dist/**', 'build/**', 'node_modules/**', 'coverage/**'],
//   },
//   // Configuração global para o parser de TypeScript (essencial para .tsx)
//   ...tseslint.configs.recommended,

//   {
//     files: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.tsx'],
//     plugins: {
//       '@stylistic': stylistic,
//       react: reactPlugin, // Plugin do React
//     },
//     languageOptions: {
//       // Define o parser que entende TypeScript e JSX
//       parser: tseslint.parser,
//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//       },
//     },
//     settings: {
//       react: { version: 'detect' }, // Detecta a versão do React automaticamente
//     },
//     rules: {
//       '@stylistic/no-extra-semi': 'error',
//       ...reactPlugin.configs.recommended.rules,
//       'react/react-in-jsx-scope': 'off', // Desativa erro de "React must be in scope" (React 17+)
//     },
//   },

//   eslintPluginPrettierRecommended,

//   {
//     rules: {
//       'prettier/prettier': [
//         'error',
//         {
//           printWidth: 80,
//           tabWidth: 2,
//           singleQuote: true,
//           semi: false,
//           trailingComma: 'all',
//           arrowParens: 'always',
//         },
//       ],
//     },
//   },
// ])
