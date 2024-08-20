import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    rules: {
      // Alinha o fechamento da tag JSX
      'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],

      // Indenta os props da JSX
      'react/jsx-indent-props': ['warn', 2],

      // // Controla o espaçamento ao redor da tag JSX
      // 'react/jsx-tag-spacing': [
      //   'warn',
      //   {
      //     closingSlash: 'never',
      //     beforeSelfClosing: 'always',
      //     afterOpening: 'never',
      //     beforeClosing: 'never',
      //   },
      // ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
