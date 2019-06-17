import * as rimraf from "rimraf"
import * as path from "path"

import * as helpers from './helpers'

helpers
  .getArgsInCamelCase()
  .map(component =>
    rimraf.sync(path.join(__dirname, "../components", component))
  );