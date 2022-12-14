import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button, Box, Input, Flex, Text, Center } from '@chakra-ui/react'

export const QUERY = gql`
  query FindAppointments($user_id: String!) {
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

export function mapData(appointments){
  const events = appointments.map((item) => {
    const event = {
      title: item.summary,
      start: item.start,
      end: item.end,
    }
    return event
  })
  return events
}

export const Failure = () => (
  <div>
    <Center>
      <Box p="5" maxW="320px" height="100" borderWidth="1px">
        <Text
          style={{ color: 'red' }}
          fontSize="l"
          fontWeight="semibold"
          lineHeight="short"
        >
          Make sure to sign in to view Calendar
        </Text>
      </Box>
    </Center>
  </div>
)

export const Success = ({ appointments }) => {    
    const calendarRef = useRef();
    const [date, setDate] = useState('');
    const dateChange = (event) => setDate(event.target.value)
  return (
    <div>
      <Box w='25%' marginBottom={3}>
        <Flex>
          <Input
            value={date}
            size='sm'
            type="date"
            bg='white'
            color='black'
            marginRight={1}
            onChange={dateChange}
          />
          <Button
            size='sm'
            bg='#26619C'
            color='white'
            onClick={()=>{calendarRef.current.getApi().gotoDate(date)}}
            >
              Go
            </Button>
        </Flex>
      </Box>
      <FullCalendar
        ref={calendarRef}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        allDaySlot={false}
        slotMinTime="06:00:00"
        slotMaxTime="23:00:00"
        timeZone="UTC"
        plugins={[timeGridPlugin,dayGridPlugin]}
        events={mapData(appointments)}
      />
    </div>
  );
}
