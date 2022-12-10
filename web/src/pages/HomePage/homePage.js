import React, { useState } from 'react'

import styled from 'styled-components'

//import AppointmentsItemCell from 'src/components/AppointmentItemCell'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell'

//import CalendarPage from /pages/Calendar;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`
function Views() {
  const [active, setActive] = useState(views[0])

  function View(view) {
    if (active == 'Tasks View') {
      return 'hi'
      //return(TasksPage());
    } else {
      return 'bye'
      //return(CalendarPage());
    }
  }
  const user_id = '1111'
  return (
    <>
      <AuthorizeCell></AuthorizeCell>
      <div>
        <b>Planner</b>
        {views.map((view) => (
          <Tab
            key={view}
            active={active === view}
            onClick={() => setActive(view)}
          >
            {view}
          </Tab>
        ))}
      </div>
      <p />
      <p>{View()}</p>
    </>
  )
}

const views = ['Tasks View', 'Calendar View']

export default Views

//<AppointmentsItemCell user_id={user_id}></AppointmentsItemCell>
