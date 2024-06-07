import js from '@eslint/js';
export default [
  js.configs.recommended,

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
