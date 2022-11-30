import { render } from '@redwoodjs/testing/web'

import ViewsLayout from './ViewsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ViewsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewsLayout />)
    }).not.toThrow()
  })
})
