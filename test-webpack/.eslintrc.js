/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    '@gidw/eslint-config-standard'
  ],
  plugins: [
    'jsdoc'
  ],
  env: {
    es2021: true,
    browser: false,
    node: true
  },
  globals: {
    Promise: 'readonly'
  },
  rules: {
    'comma-dangle': 'off',
    'dot-notation': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'padded-blocks': 'off',
    'prefer-promise-reject-errors': 'off',
    'vars-on-top': 'error',
    'function-paren-newline': ['error', 'multiline-arguments'],
    'function-call-argument-newline': ['error', 'consistent'],
    'space-before-function-paren': ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'no-param-reassign': 'error',
    'no-shadow': 'error',

    'jsdoc/check-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/valid-types': 'error'
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        Boolean: 'boolean',
        Number: 'number',
        String: 'string',
        object: 'Object',
        '.<>': '<>',
        'object<>': 'Object<>'
      },
      structuredTags: {
        typedef: {
          required: [
            'name',
            'type'
          ]
        }
      },
      tagNamePreference: {
        arg: 'param',
        argument: 'param',
        virtual: 'abstract',
        return: 'returns',
        const: 'constant',
        prop: 'property',
        class: 'constructor',
        function: 'method',
        augments: {
          message: '@extends is to be used over @augments' +
            ' as it is more evocative of classes than @augments',
          replacement: 'extends'
        }
      }
    }
  },
  ignorePatterns: [
    'node_modules/',
    '**/*.min.js',
    'ws-lib/',
    'source/3rdparty/',
    'src/3rdparty/',
    'source/generated/',
    'src/generated/',
    'platforms/',
    'plugins/',
    'www/',
    'lgc-core-api-js/',
    'cordova-plugin-*',
    'webapp/',
    'webapp-live/',
    'source/**/*.d.ts'
  ]
}
