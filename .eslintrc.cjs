module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['/*.*'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@tanstack/query/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'simple-import-sort',
    'import',
    'jsx-a11y',
    'promise',
    'react',
    'react-hooks',
    'unicorn',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://stackoverflow.com/a/64024916/286387
    'no-use-before-define': 'off',
    // Allow for..of syntax
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // Из Lodash нужно импортировать каждую функцию из индивидуального модуля.
    // Это нужно для того, чтобы вся библиотека не была включена в bundle.
    'no-restricted-imports': ['error', {"paths": [
        {
          'name': 'lodash',
          'message': 'Import [module] from lodash/[module] instead',
        },
      ]
    }],

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
    // TODO set off only for TS and JS modules
    'import/extensions': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    // Some variable names are defined in the backend (can't change this).
    // Also sometimes the following var names are necessary TYPE__TYPE_NAME
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: null, // disable rule
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // Airbnb prefers forEach
    'unicorn/no-array-for-each': 'off',
    'unicorn/filename-case': 'off',
    // Sometimes need to return null, because undefined is invalid JSX Element
    'unicorn/no-null': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/catch-error-name': 'off',
    // Difficult to write redux slices with it
    'unicorn/consistent-destructuring': 'off',
    // Difficult to write redux slices with it
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/expiring-todo-comments': 'off',
    // Enable some rules for async JS
    'no-promise-executor-return': 'error',
    'require-atomic-updates': 'error',
    'max-nested-callbacks': 'error',
    'no-return-await': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Allow `require()`
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    /////////////////////////////////////////////
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              [
                '^src(/.*|$)',
                '^@(shared|entities|widgets|images)(/.*|$)',
                // Parent imports. Put `..` last.
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                // Other relative imports. Put same-folder imports and `.` last.
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
              ],
              // Side effect imports.
              ['^\\u0000'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
};
