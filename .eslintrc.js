module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: ["airbnb-typescript-prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
};
