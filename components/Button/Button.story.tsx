import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs'
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
