import { db } from 'src/lib/db'

export const appointments = ({ user_id }) => {
  return db.appointment.findMany({ where: { user_id } })
}

export const appointment = ({ id }) => {
  return db.appointment.findUnique({
    where: { id },
  })
}
export const createAppointment = ({ input }) => {
  return db.appointment.create({
    data: input,
  })
}
export const deleteAppointments = ({ user_id }) => {
  console.log(user_id, 3)
  return db.appointment.deleteMany({ where: { user_id: '1111' } })
}
export const deleteAppointment = ({ user_id }) => {
  return db.appointment.delete({
    where: { user_id },
  })
}

/*export const getEvents = async ({ start, end, code }) => {

  const { google } = require('googleapis')
  const oauth2Client = new google.auth.OAuth2(
    process.env.YOUR_CLIENT_ID,
    process.env.YOUR_CLIENT_SECRET,
    process.env.YOUR_REDIRECT_URL
  )

  // ToDo implement error handling when no code is passed
  let { tokens } = await oauth2Client.getToken(code)
  console.log({ tokens })
  oauth2Client.setCredentials(tokens)

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
  const res = await calendar.events.list({
    calendarId: 'primary',
    timeMin: start,
    timeMax: end,
    maxResults: 100,
    singleEvents: true,
    orderBy: 'startTime',
  })
  const calendarEvents = res.data.items
  if (!calendarEvents || calendarEvents.length === 0) {
    console.log('No upcoming events found.')
    return
  }
  console.log('Upcoming 100 events:')
  const events = calendarEvents.map((item, i) => {
    const start = item.start.dateTime || item.start.date
    const end = item.end.dateTime || item.end.date
    const event = {
      summary: item.summary,
      description: item.description,
      start: start,
      end: end,
      user_id: 'testing',
    }
    createAppointment(event)
    return event
  })
  return events
}*/
