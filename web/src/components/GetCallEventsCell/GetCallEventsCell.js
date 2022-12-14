import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query calendar_demo($start: String!, $end: String!, $code: String!) {
    getEvents(start: $start, end: $end, code: $code) {
      code
      events {
        summary
        description
        start
        end
      }
    }
  }
`
const CREATE_APPOINTMENT_MUTATION = gql`
  mutation CreateAppointmentMutation($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)
export const Success = ({ getEvents }) => {
  const { isAuthenticated, currentUser } = useAuth()
  if (!isAuthenticated) {
    navigate(routes.landing())
  }
  const [load, setload] = useState(true)
  const [createAppointment, { loading, error }] = useMutation(
    CREATE_APPOINTMENT_MUTATION,
    {
      onCompleted: () => {},
      onError: () => {},
    }
  )
  const userid = currentUser.uid
  return (
    <>
      {load ? (
        getEvents.events.map((item) => {
          const input = {
            summary: item.summary,
            description: '',
            start: item.start,
            end: item.end,
            user_id: userid,
          }
          setload(false)
          //console.log(item)
          createAppointment({ variables: { input } })
        })
      ) : (
        <div></div>
      )}
    </>
  )
}
/*{getEvents.events.map((item) => {
  const input = {
    summary: item.summary,
    description: '',
    start: item.start,
    end: item.end,
    user_id: '1111',
  }

  //console.log(item)
  createAppointment({ variables: { input } })
})}*/
