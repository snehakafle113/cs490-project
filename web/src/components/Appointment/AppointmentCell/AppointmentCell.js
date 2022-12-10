import Appointment from 'src/components/Appointment/Appointment'

export const QUERY = gql`
  query FindAppointmentById($id: Int!) {
    appointment: appointment(id: $id) {
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

export const Empty = () => <div>Appointment not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointment }) => {
  return <Appointment appointment={appointment} />
}
