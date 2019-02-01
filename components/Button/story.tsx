import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// import { text, boolean, select } from '@storybook/addon-knobs'
// import { decorateAction } from '@storybook/addon-actions'
// import { storybook } from '../../utils'
import { StoryWrapper } from '../../.storybook/decorators'

import { Button } from './index'

console.log('vvv', Button)

storiesOf('Butto', module)
  .add(
    'Default',
    withInfo()(() => (
      <StoryWrapper>
        <Button>
          Default
        </Button>
      </StoryWrapper>
    )),
  )
