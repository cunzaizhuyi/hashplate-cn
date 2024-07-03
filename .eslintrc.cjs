module.exports = {
    env: {
        "browser": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "parser": "babel-eslint"
    },
    plugins: [
        "@typescript-eslint",
        "import",
        "sort-keys-custom-order"
    ],
    root: true,
    rules: {
        "@typescript-eslint/member-delimiter-style": ["error"],
        "@typescript-eslint/type-annotation-spacing": ["error"],
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": ["error"],
        "brace-style": ["error", "stroustrup"],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error"],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "always"],
        "import/order": ["error"],
        "indent": ["error", 4],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "no-multi-spaces": ["error"],
        "object-curly-spacing": ["error", "always"],
        "prefer-template": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "sort-keys-custom-order/object-keys": ["error", {
            "orderedKeys": [
                "id",
                "_id",
                "name",
                "title",
                "type",
                "start",
                "end",
                "input",
                "inputs",
                "output",
                "outputs",
                "methods",
                "in_exec",
                "out_exec"
            ]
        }],
        "sort-keys-custom-order/type-keys": ["error", {
            "orderedKeys": [
                "id",
                "_id",
                "name",
                "title",
                "type"
            ]
        }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error"],
        "template-curly-spacing": ["error", "always"]
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "alias": {
                "extensions": [".js", ".ts"],
                map: [
                    ["@", "./src"]
                ]
            },
            "typescript": {}
        }
    }
};
