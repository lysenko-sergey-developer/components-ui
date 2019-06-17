const yargs = require("yargs");

const getArgsInCamelCase = () =>
  yargs.argv._.map(component =>
    component
      .toLowerCase()
      .replace(
        /(\w)(.+)/,
        (match, p1, p2, offset, string) => `${p1.toUpperCase()}${p2}`
      )
  );

module.exports = {
  getArgsInCamelCase,
};
