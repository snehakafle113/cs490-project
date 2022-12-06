import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button, Box, Input, Flex } from '@chakra-ui/react'

function CalendarView(){
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
        plugins={[timeGridPlugin,dayGridPlugin]}
      />
    </div>
  );
}

export default CalendarView;