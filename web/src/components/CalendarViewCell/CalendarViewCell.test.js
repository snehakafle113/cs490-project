import { render } from '@redwoodjs/testing/web'
import { Success } from './CalendarViewCell'
import { standard } from './CalendarViewCell.mock'

describe('CalendarViewCell', () => {
  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success appointments={[standard()]} />)
    }).not.toThrow()
  })
})