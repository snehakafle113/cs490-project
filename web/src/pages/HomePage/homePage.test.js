import { render } from '@redwoodjs/testing/web'
import HomePage from './homePage'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})