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
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
