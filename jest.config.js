module.exports = {
  transform: {
    "\\.(js|jsx)?$": "./jestTransform.js",
    "^.+\\.ts(x)?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
  },
  modulePaths: ["src"],
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(gatsby|component-library|fp-ts)/)"],
  globals: {
    __PATH_PREFIX__: "",
    __LINK_PREFIX__: "",
    __PREFIX_LINKS__: "",
    "ts-jest": {
      diagnostics: false,
    },
  }
}
