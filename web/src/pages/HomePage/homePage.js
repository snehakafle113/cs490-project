// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center, Button } from '@chakra-ui/react'
//import TaskView from '../../components/Task'
import { CalendarView } from '../../components/calendarView'
import { Text, Input } from "@chakra-ui/react"
import AuthorizeCell from 'src/components/AuthorizeCell'
import AppointmentItemCell from 'src/components/AppointmentItemCell'

const HomePage = () => {

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <AuthorizeCell user_id={'1111'}></AuthorizeCell>
      <AppointmentItemCell user_id={'1111'}></AppointmentItemCell>
      <Tabs>
        <TabList>
          <Text fontWeight="extrabold" mt='2'>Planner</Text>
          <Tab>Calendar</Tab>
          <Tab>Tasks</Tab>
        </TabList>
      <TabPanels>
        <TabPanel>
          <Center>
              <Box w="85%">
                <CalendarView user_id={'1111'}></CalendarView>
              </Box>
          </Center>
        </TabPanel>
        <TabPanel>
          <Center>
            <Box w="85%">
              <></>
            </Box>
          </Center>
        </TabPanel>
      </TabPanels>
      </Tabs>
    </>
  )
}

export default HomePage
