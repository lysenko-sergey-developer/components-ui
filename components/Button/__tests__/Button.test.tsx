import * as React from 'react'
import { shallow } from 'enzyme'

import { Button } from '..'

test('CheckboxWithLabel changes the text after click', () => {
  const button = shallow(<Button />)

  // Snapshot demo
  expect(button).toMatchSnapshot(<div>111</div>)
})
