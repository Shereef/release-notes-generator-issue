const writerOpts = {
  transform: (commit) => {
    if (commit.type === `feat`) {
      commit.type = `New and Exciting Things`;
    }
    return commit;
  },
};
module.exports = {
  writerOpts,
};
