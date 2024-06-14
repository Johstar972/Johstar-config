import eslintjs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslintjs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    name: 'eslint-config-johstar-config',

    rules: {
      'no-debugger': 'warn',
      'no-console': 'error',
    },
  },
  {
    ignores: ['**/node_modules/**', 'build/**'],
  },
];
