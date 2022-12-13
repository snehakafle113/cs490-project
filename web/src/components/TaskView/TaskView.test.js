import { render } from '@redwoodjs/testing/web'

import TaskView from './TaskView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TaskView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskView />)
    }).not.toThrow()
  })
})
