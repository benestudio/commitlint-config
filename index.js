module.exports = {
  rules: {
    "header-max-length": [2, "always", 72],
    "subject-empty": [2, "never"],
    "references-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^.*:\s(.*):\s(.*)$/,
      headerCorrespondence: ["type", "subject"]
    }
  }
};
