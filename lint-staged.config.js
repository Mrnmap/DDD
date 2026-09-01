/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable unicorn/prefer-module */
const path = require("path");

const buildEslintCommand = (filenames) => {
  // Filter out files in the src/gql/**/* path
  const filteredFilenames = filenames.filter((f) => !f.startsWith("src/gql/"));

  return `next lint --fix --file ${filteredFilenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
};

module.exports = {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{png,jpeg,jpg,gif,svg}": "imagemin-lint-staged",
};
