export default [
    {
        root: true,
        ignorePatterns: [
            '**/*'
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: './tsconfig.json',
        },
        plugins: [
            '@stylistic',
            '@typescript-eslint',
        ],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        overrides: [
            {
                files: [
                    '*.ts',
                    '*.tsx'
                ],
                rules: {
                    '@typescript-eslint/explicit-function-return-type': 'error',
                    '@typescript-eslint/no-explicit-any': 'off',
                    '@typescript-eslint/no-unsafe-call': 'off',
                    '@typescript-eslint/no-unsafe-return': 'off',
                    '@typescript-eslint/semi': ['error'],
                    '@typescript-eslint/ban-ts-comment': [
                        'error',
                        {
                            'ts-ignore': 'allow-with-description'
                        }
                    ]
                }
            }
        ],
        rules: {
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/comma-spacing': 'error',
            '@stylistic/comma-style': 'error',
            '@stylistic/eol-last': 'error',
            '@stylistic/indent': [
                'error',
                2,
            ],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/quotes': [
                'error',
                'single',
                {'avoidEscape': true},
            ],
            '@stylistic/semi': 'off',
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': [
                'error', {
                    'anonymous': 'always',
                    'named': 'never',
                    'asyncArrow': 'always',
                },
            ],
            'curly': 'error',
            'eqeqeq': 'error',
            'no-console': 'error',
            'no-duplicate-imports': 'error',
            'no-extra-boolean-cast': 'off',
            'no-lonely-if': 'error',
            'no-prototype-builtins': 'off',
            'no-self-compare': 'error',
            'object-curly-spacing': ["error", "always"],
        }
    }
];
