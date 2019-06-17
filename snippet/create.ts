import * as fs from "fs"
import * as path from "path"

import * as helpers from './helpers'

helpers.getArgsInCamelCase()
  .map(component =>
    fs.access(
      path.join(__dirname, '../components', component),
      err => err &&
      fs.mkdir(
        path.join(
          __dirname, '../components', component
        ),
        err => !err &&
        fs.mkdir(
          path.join(
            __dirname, '../components', component, '__tests__'
          ),
          err => !err &&
          fs.writeFile(
            path.join(
              __dirname, '../components', component, '__tests__', `${component}.test.tsx`
            ),
            `import * as React from 'react'
import { shallow } from 'enzyme'
import { ${component} } from '..'

describe('${component} test cases', () => {
  it('${component} was success rendered!', () => {
  const component = shallow(<${component}/>)

  expect(component).toMatchSnapshot()
  })
})
`,
            err => !err &&
            fs.writeFile(
              path.join(
                __dirname, '../components', component, 'component.tsx'
              ),
              `import * as React from 'react'

const ${component}Component = ({}: {}) => (
  null
)

export { ${component}Component }
`,
              err => !err &&
              fs.writeFile(
                path.join(
                  __dirname, '../components', component, 'index.tsx'
                ),
                `import { ${component}Component as ${component} } from './component'

export { ${component} }
`,
                err => !err &&
                fs.writeFile(
                  path.join(
                    __dirname, '../components', component, 'component.tsx'
                  ),
                  `import * as React from 'react'

const ${component}Component = () => (
  null
)

export { ${component}Component }
`,
                  err => !err && `Success create component ${path.join(__dirname, '../components', component)}`
                )
              )
            )
          )
        )
      )
    )
  )