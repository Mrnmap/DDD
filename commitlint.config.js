// Docs: https://commitlint.js.org/#/reference-configuration
const Configurations = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (commit) =>
      commit.includes("chore: release") || commit.includes("[skip ci]"),
  ],
  defaultIgnores: true,
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = Configurations;
