import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AppointmentForm from 'src/components/Appointment/AppointmentForm'

const CREATE_APPOINTMENT_MUTATION = gql`
  mutation CreateAppointmentMutation($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
    }
  }
`

const NewAppointment = () => {
  const [createAppointment, { loading, error }] = useMutation(
    CREATE_APPOINTMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Appointment created')
        navigate(routes.appointments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAppointment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Appointment</h2>
      </header>
      <div className="rw-segment-main">
        <AppointmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAppointment
