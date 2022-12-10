import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AppointmentForm from 'src/components/Appointment/AppointmentForm'

export const QUERY = gql`
  query EditAppointmentById($id: Int!) {
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
const UPDATE_APPOINTMENT_MUTATION = gql`
  mutation UpdateAppointmentMutation(
    $id: Int!
    $input: UpdateAppointmentInput!
  ) {
    updateAppointment(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ appointment }) => {
  const [updateAppointment, { loading, error }] = useMutation(
    UPDATE_APPOINTMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Appointment updated')
        navigate(routes.appointments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAppointment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Appointment {appointment?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AppointmentForm
          appointment={appointment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
