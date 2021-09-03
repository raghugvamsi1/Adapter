module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/allure-test-report.setup.js"],
    collectCoverageFrom: [
      "src/*.js"
    ],
    modulePaths: ["<rootDir>/node_modules/"],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules", 
        "<rootDir>/demo", 
        "<rootDir>/cypress", 
        "<rootDir>/docs"
    ],
    coverageReporters: ["json", "text", "lcov", "clover"],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    coverageDirectory: "coverage",
    reporters: [
      "default",
    ]
};