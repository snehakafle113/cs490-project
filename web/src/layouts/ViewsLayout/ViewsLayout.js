import { CalendarIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const ViewLayout = ({ children }) => {
  const { isAuthenticated, logOut } = useAuth()
  return (
    <>
      <header>
        <nav>
          <Stack
            bg="black"
            p={[5]}
            m={[2, 0]}
            direction="row"
            align="center"
            justify="end"
            spacing={4}
          >
            <Button leftIcon={<CalendarIcon />}>
              <Link to={routes.home()}>Home</Link>
            </Button>
            <Button>Profile</Button>
            {isAuthenticated ? (
              <div>
                <Button onClick={logOut}>Logout</Button>
              </div>
            ) : (
              <Button>
                <Link to={routes.login()}>Login</Link>
              </Button>
            )}
          </Stack>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default ViewLayout
