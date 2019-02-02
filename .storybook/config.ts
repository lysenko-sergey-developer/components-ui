import { configure, addDecorator } from '@storybook/react'
import { withStoryStyles } from './decorators'

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.story.tsx$/)
function loadStories() {
  addDecorator(withStoryStyles)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
