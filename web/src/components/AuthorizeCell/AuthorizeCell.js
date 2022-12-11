import { useEffect } from 'react'
import { useState } from 'react'

import { Button } from '@chakra-ui/react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GetCallEventsCell from 'src/components/GetCallEventsCell'
export const QUERY = gql`
  query get_auth_url {
    getAuthorizationURL {
      url
    }
  }
`
const DELETE_APPOINTMENTS_MUTATION = gql`
  mutation DeleteAppointmentsMutation($user_id: String!) {
    deleteAppointments(user_id: $user_id) {
      user_id
    }
  }
`

const start = '2022-11-01T12:00:00Z'
const end = '2022-12-01T12:00:00Z'
const queryParams = new URLSearchParams(window.location.search)
const code = queryParams.get('code')
export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>Empty</div>
export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)
export const Success = ({ getAuthorizationURL }) => {
  const [deleteAppointments] = useMutation(DELETE_APPOINTMENTS_MUTATION, {
    onCompleted: () => {},
    onError: () => {},
  })

  const [showSync, setShowSync] = useState(false)
  const [getCall, setgetCall] = useState(false)
  const sync = () => {
    window.location.href = getAuthorizationURL.url
    const user_id = '1111'
    deleteAppointments({ variables: { user_id } })
  }
  //const add = () => {}
  useEffect(() => {
    if (showSync) {
      setShowSync(false)
    }
  }, [deleteAppointments, getAuthorizationURL.url, showSync])
  return (
    <>
      <Button onClick={sync}>Sync</Button>
      <Button onClick={() => setgetCall(true)}>Add Events</Button>
      {getCall ? (
        <GetCallEventsCell
          start={start}
          end={end}
          code={code}
        ></GetCallEventsCell>
      ) : (
        <div></div>
      )}
    </>
  )
}
