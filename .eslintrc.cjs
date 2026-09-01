/* eslint-disable unicorn/prefer-module */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:i18next/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "next/core-web-vitals",
    "plugin:cypress/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "i18next", "jsx-a11y", "@tanstack/query"],
  overrides: [
    {
      files: ["test/**"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: { "jest/prefer-expect-assertions": "off" },
    },
  ],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "unicorn/no-null": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/prevent-abbreviations": [
      "off",
      {
        replacements: {
          props: {
            properties: false,
          },
        },
        allowList: {
          "next-env.d": true,
          "next-i18next.config": true,
          generateStaticParams: true,
          withBuilderDevTools: true,
        },
        ignore: ["\\.d.ts$", /^ignore/i],
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: [
          "^lint-staged.config\\.js$",
          "\\.d.ts$",
          "\\.cy.ts$",
          /^ignore/i,
          /^vendor/i,
          /^cypress/i,
        ],
      },
    ],
    "i18next/no-literal-string": "warn",
    "jsx-quotes": [2, "prefer-double"],
  },
};
