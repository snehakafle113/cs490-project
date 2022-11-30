import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

function weekView(){
    return (
        <div>
            <FullCalendar
                defaultView="timeGridWeek"
                header={{
                    left: "prev,next,today",
                    center: "title",
                    right: "timeGridWeek,timeGridDay"
                }}
                plugins={[timeGridPlugin,dayGridPlugin]}
            />
        </div>
    );
}

export default weekView;