import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

function CalendarView(){
    return (
        <div>
            <FullCalendar
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next,today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                allDaySlot={false}
                plugins={[timeGridPlugin,dayGridPlugin]}
            />
        </div>
    );
}

export default CalendarView;