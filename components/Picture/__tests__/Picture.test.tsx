import * as React from 'react'
import { shallow } from 'enzyme'
import { Picture } from '..'

describe('Picture test cases', () => {
  it('Picture was success rendered!', () => {
  const component = shallow(
    <Picture
      sources={[
        {
          src: ''
        }
      ]}
      imageProps={{
        src: '',
        alt: ''
      }}
    />
  )

  expect(component).toMatchSnapshot()
  })
})
