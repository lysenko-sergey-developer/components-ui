import * as yargs from "yargs"

const getArgsInCamelCase = () =>
  yargs.argv._.map(component =>
    component
      .toLowerCase()
      .replace(
        /(\w)(.+)/,
        (_, p1, p2) => `${p1.toUpperCase()}${p2}`
      )
  );

export { getArgsInCamelCase }
