module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "impliedStrict": true,
            "modules": true
        },
        "ecmaVersion": "esnext",
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/indent": ["warn", 4],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "modifiers": ["const"],
                "format": ["UPPER_CASE", "camelCase"]
            },
            {
                "selector": "variable",
                "format": ["camelCase", "snake_case", "PascalCase"],
                "leadingUnderscore": "allow",
                "trailingUnderscore": "allow",
            }
        ],
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "double"
        ],
        "curly": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "warn",
        "no-multiple-empty-lines": "error",
        "no-redeclare": "warn",
        "no-underscore-dangle": "off",
        "no-var": "off",
        "indent": "off"
    }
};
