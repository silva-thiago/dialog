import React from 'react'
import { render } from 'enzyme'

import Comment from '../Comment'

it('Comment should render text without crashing', () => {
  const comment = {
    comment: 'test'
  }
  const wrapper = render(<Comment c = {comment} />)
  expect(wrapper.text()).toBe('test')
})

it('Comment should render empty without crashing', () => {
  const wrapper = render(<Comment c = {comment} />)
  expect(wrapper.text()).toBe('empty')
})