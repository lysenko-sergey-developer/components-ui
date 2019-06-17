const rimraf = require("rimraf")
const path = require("path")
const helpers = require('./helpers.ts')

helpers
  .getArgsInCamelCase()
  .map(component =>
    rimraf.sync(path.join(__dirname, "../components", component))
  );