import * as React from 'react'

import { Box, Text } from '@chakra-ui/react'

import AppointmentItemCell from '../AppointmentItemCell/AppointmentItemCell.js'

export const QUERY = gql`
  query FindAppointmentsList($user_id: String!) {
    appointments(user_id: $user_id) {
      id
      summary
      description
      start
      end
      user_id
    }
  }
`

export const Loading = () => (
  <div>
    <Box p="5" borderWidth="1px">
      <ul>
        <Text fontSize="xl" fontWeight="semibold" lineHeight="long">
          Appointments
        </Text>
        <li style={{ 'list-style-type': 'none' }}>
          <br></br>
        </li>
        <Text fontSize="l" lineHeight="long">
          Loading...
        </Text>
      </ul>
    </Box>
  </div>
)

export const Empty = () => (
  <div>
    <Box p="5" borderWidth="1px">
      <ul>
        <Text fontSize="xl" fontWeight="semibold" lineHeight="long">
          Appointments
        </Text>
        <li style={{ 'list-style-type': 'none' }}>
          <br></br>
        </li>
        <Text fontSize="l" lineHeight="long">
          Empty
        </Text>
      </ul>
    </Box>
  </div>
)

export const Failure = ({ error }) => (
  <div>
    <Box p="5" borderWidth="1px">
      <ul>
        <Text fontSize="xl" fontWeight="semibold" lineHeight="long">
          Appointments
        </Text>
        <li style={{ 'list-style-type': 'none' }}>
          <br></br>
        </li>
        <Text style={{ color: 'red' }} fontSize="l" lineHeight="long">
          Faliure to load Appoinment List
        </Text>
      </ul>
    </Box>
  </div>
)

export const Success = ({ appointments }) => {
  return (
    <div>
      <Box p="5" borderWidth="1px">
        <ul>
          <Text fontSize="xl" fontWeight="semibold" lineHeight="long">
            Appointments
          </Text>
          <li style={{ 'list-style-type': 'none' }}>
            <br></br>
          </li>
          {appointments.map((item) => {
            return <AppointmentItemCell id={item.id}></AppointmentItemCell>
          })}
        </ul>
      </Box>
    </div>
  )
}
