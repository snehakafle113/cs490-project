export const QUERY = gql`
  query FindAppointmentItemQuery($id: Int!) {
    appointmentItem: appointmentItem(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ appointmentItem }) => {
  return <div>{JSON.stringify(appointmentItem)}</div>
}
