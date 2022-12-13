import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_APPOINTMENT_MUTATION = gql`
  mutation DeleteAppointmentMutation($id: Int!) {
    deleteAppointment(id: $id) {
      id
    }
  }
`

const Appointment = ({ appointment }) => {
  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Appointment deleted')
      navigate(routes.appointments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete appointment ' + id + '?')) {
      deleteAppointment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Appointment {appointment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{appointment.id}</td>
            </tr>
            <tr>
              <th>Summary</th>
              <td>{appointment.summary}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{appointment.description}</td>
            </tr>
            <tr>
              <th>Start</th>
              <td>{appointment.start}</td>
            </tr>
            <tr>
              <th>End</th>
              <td>{appointment.end}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{appointment.user_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAppointment({ id: appointment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(appointment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Appointment
