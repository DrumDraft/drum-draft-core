// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // если у вас есть старые shareable configs
  baseDirectory: __dirname,
});

export default [
  // 1) Игнорируем папки, которые нам не нужны
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  // 2) Основной конфиг для .ts-файлов
  {
    files: ['*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    ...compat.extends(
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ),
    rules: {
      // здесь можно переопределить или выключить правило
      'prettier/prettier': 'off',
      'import/newline-after-import': ['error', { count: 1 }],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreImports: false,
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
];
