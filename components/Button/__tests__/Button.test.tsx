import * as React from 'react'
import { shallow } from 'enzyme'

import { Button } from '..'

describe('Button test cases', () => {
  it('Button was success rendered!', () => {
    const button = shallow(<Button>Test button!</Button>)

    expect(button).toMatchSnapshot()
  })

  it('Button onClick is valid callback', () => {
    const state = {
      text: 'firstState',
    }

    const handleClick = () => state.text = 'secondState'
    const button = shallow(<Button onClick={handleClick}/>)
    button.simulate('click')

    expect(state).toMatchSnapshot({ text: 'secondState' })
  })
})
