import React from 'react'
import 'antd/dist/antd.css'; 

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// import { Welcome } from '@storybook/react/demo'
import { Button } from '../components/Button'

console.log('vvv', Button)

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button />
  ))
