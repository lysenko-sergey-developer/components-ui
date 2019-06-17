import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { StoryWrapper } from '../../.storybook/decorators'

import { Picture } from './index'

storiesOf('Picture', module)
  .add(
    'Default',
    withInfo()(() => (
      <StoryWrapper>
        <Picture
          sources={[
            {
              src: 'https://pbs.twimg.com/profile_images/910140716604706816/wc8diHuk_400x400.jpg'
            }
          ]}
          imageProps={{
            src: 'https://pbs.twimg.com/profile_images/910140716604706816/wc8diHuk_400x400.jpg',
            alt: 'i watch the sunset'
          }}
        />
      </StoryWrapper>
    )),
  )
