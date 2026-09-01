config = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "master",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    "@semantic-release/github",
    // NOTE: Uncomment this if you want to push changes to git, including the changelog and package.json. If you do, you'll need to set up a GitHub token with the repo scope and add it to your repo's secrets. Otherwise, you'll get an error.
    //
    // [
    //   "@semantic-release/git",
    //   {
    //     assets: ["docs/CHANGELOG.md", "package.json"],
    //     message:
    //       "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    //   },
    // ],
  ],
};

module.exports = config;
