import * as React from 'react'

import { Box, Text } from '@chakra-ui/react'

import AppointmentItemCell from '../AppointmentItemCell/AppointmentItemCell.js'

export const QUERY = gql`
  query AppointmentListsQuery {
    appointmentLists {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ appointmentLists }) => {
  return (
    <div>
      <Box p="5" borderWidth="1px">
        <ul>
          <Text fontSize="xl" fontWeight="semibold" lineHeight="long">
            Appointments
          </Text>
          <li style={{"list-style-type": "none"}}><br></br></li>
          {appointmentLists.map((item) => {
            return (
              <AppointmentItemCell key={item.id} appointmentitem={item}></AppointmentItemCell>
            )
          })}
        </ul>
      </Box>
    </div>
  )
}

