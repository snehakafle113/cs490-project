import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Appointment/AppointmentsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_APPOINTMENT_MUTATION = gql`
  mutation DeleteAppointmentMutation($id: Int!) {
    deleteAppointment(id: $id) {
      id
    }
  }
`

const AppointmentsList = ({ appointments }) => {
  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Appointment deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete appointment ' + id + '?')) {
      deleteAppointment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Summary</th>
            <th>Description</th>
            <th>Start</th>
            <th>End</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{truncate(appointment.id)}</td>
              <td>{truncate(appointment.summary)}</td>
              <td>{truncate(appointment.description)}</td>
              <td>{truncate(appointment.start)}</td>
              <td>{truncate(appointment.end)}</td>
              <td>{truncate(appointment.user_id)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.appointment({ id: appointment.id })}
                    title={'Show appointment ' + appointment.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAppointment({ id: appointment.id })}
                    title={'Edit appointment ' + appointment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete appointment ' + appointment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(appointment.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AppointmentsList
