import { Link, routes } from '@redwoodjs/router'

import Appointments from 'src/components/Appointment/Appointments'

export const QUERY = gql`
  query FindAppointments {
    appointments {
      id
      summary
      description
      start
      end
      user_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No appointments yet. '}
      <Link to={routes.newAppointment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointments }) => {
  return <Appointments appointments={appointments} />
}
