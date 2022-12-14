import { render } from '@redwoodjs/testing/web'
import { Success, Failure } from './CalendarViewCell'
import { standard } from './CalendarViewCell.mock'

describe('CalendarViewCell', () => {
  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure />)
    }).not.toThrow()
  })
  
  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success appointments={[standard()]} />)
    }).not.toThrow()
  })
})