module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  moduleFileExtensions: ["ts", "js", "json", "node", "graphql"],
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
}