import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button, Box, Input, Flex, Text, Center } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import CalendarViewCell from 'src/components/CalendarViewCell';

var uid = ''

const Calendar = () =>{
    const { isAuthenticated, currentUser } = useAuth()
    if(!isAuthenticated){
        uid = ''
    }
    else {
        uid = currentUser.uid
    }
    
    return(
        <>
            <CalendarViewCell user_id={uid}></CalendarViewCell>
        </>
    )
}

export default Calendar;