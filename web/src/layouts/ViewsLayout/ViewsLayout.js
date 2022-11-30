import { CalendarIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import  Banner  from '../../components/Banner'

import { Link, routes } from '@redwoodjs/router'

const ViewLayout = ({ children }) => {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>{children}</main>
    </>
  )
}

export default ViewLayout
