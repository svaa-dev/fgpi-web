import eslintPluginAstro from 'eslint-plugin-astro'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist', '.astro']),
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-eval': 'error',
      // override/add rules settings here, such as:
      'astro/no-set-html-directive': 'error',
    },
  },
])
