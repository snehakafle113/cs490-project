import { render } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './CalendarViewCell'
import { standard } from './CalendarViewCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('CalendarViewCell', () => {
  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success calendarView={standard().calendarView} />)
    }).not.toThrow()
  })
})
