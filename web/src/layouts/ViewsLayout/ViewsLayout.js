import { CalendarIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const ViewLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
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
            <Button>Profile</Button>
          </Stack>
          {/* <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul> */}
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default ViewLayout
