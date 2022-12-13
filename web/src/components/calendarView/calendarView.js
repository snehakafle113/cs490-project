import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button, Box, Input, Flex } from '@chakra-ui/react'

const CalendarView = () => {
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
        
        events={[{
          title: "Event 1",
          start: "2022-12-12T06:00:00-05:00",
          end: "2022-12-12T08:00:00-05:00"
        }]}
      />
    </div>
  );
}

export default CalendarView;