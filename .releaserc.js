const { writerOpts } = require("./.releaserc.writerOpts");
module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",

    [
      "@semantic-release/release-notes-generator",
      {
        writerOpts,
      },
    ],
    [
      "@semantic-release/github",
      {
        successComment: false,
        assignees: false,
        releasedLabels: false,
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/git",
  ],
};
