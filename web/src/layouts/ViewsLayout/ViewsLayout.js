import { CalendarIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import  Banner  from '../../components/Banner'

import { Link, routes } from '@redwoodjs/router'

const ViewLayout = ({ children }) => {
  return (
    <>
      <header>
      <Stack
            bg="black"
            p={[5]}
            m={[2, 0]}
            pl={[1300]}
            direction="row"
            spacing={4}
          >
            <Button leftIcon={<CalendarIcon />}>
              <Link to={routes.home()}>Home</Link>
            </Button>

            <Button>
              <Link to={routes.profile()}>Profile</Link>
            </Button>
          </Stack>
      </header>
      <main>{children}</main>
    </>
  )
}

export default ViewLayout
