import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs'
// import { decorateAction } from '@storybook/addon-actions'
// import { storybook } from '../../utils'
import { StoryWrapper } from '../../.storybook/decorators'

import { Button } from './index'

storiesOf('Button', module)
  .add(
    'Default',
    withInfo()(() => (
      <StoryWrapper>
        <Button>
          {text('content', 'Button')}
        </Button>
      </StoryWrapper>
    )),
  )
