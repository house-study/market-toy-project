// .eslintrc.js (ESLint v8용)

module.exports = {
  extends: [
    "next/core-web-vitals",
    "next",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
