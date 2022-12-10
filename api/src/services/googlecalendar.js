export const getEvents = async ({ start, end, code }) => {
  const { google } = require('googleapis')
  const oauth2Client = new google.auth.OAuth2(
    process.env.YOUR_CLIENT_ID,
    process.env.YOUR_CLIENT_SECRET,
    process.env.YOUR_REDIRECT_URL
  )

  // ToDo implement error handling when no code is passed
  let { tokens } = await oauth2Client.getToken(code)
  //console.log({ tokens })
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
    }

    return event
  })

  // const events = [
  //   {
  //     summary: 'The First Event',
  //     description:
  //       'This is an example demo of using the Google calendar API in RedwoodJS',
  //     start: '2022-11-14T09:00:00Z',
  //     end: '2022-11-14T09:30:00Z',
  //   },
  //   {
  //     summary: 'The Second Event',
  //     start: '2022-11-14T14:00:00Z',
  //     end: '2022-11-14T15:00:00Z',
  //   },
  // ]
  return { code, events }
}
