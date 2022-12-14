import React, { Component } from 'react'

import {
  Box,
  HStack,
  Flex,
  Spacer,
  Text,
  Icon,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react'
import { LockIcon, } from '@chakra-ui/icons'
import Background from 'src/assets/background.png'
import Logo from 'src/assets/logo.png'
import { useAuth } from '@redwoodjs/auth'

const LandingPage = () => {
    const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()
    return (
      <React.Fragment>
        <Box>
          <div
            style={{
              backgroundImage: `url(${Background})`,
              width: '100%',
              height: '750px',
            }}
          >
          <Box w='100%' p={4} color='white'>
            <Flex>
              <HStack spacing = '17px'>
                <Box>
                  <img src={Logo} alt="image" width="50" height="50"/>
                  </Box>
                <Box>
                  <Text fontsize='4xl' as='b'>EnchantingTable</Text>
                </Box>
              </HStack>
              <Spacer />
              <HStack spacing = '17px'>
                <Button
                  leftIcon={<LockIcon />}
                  onClick={async () => {
                    if (isAuthenticated) {
                      await logOut()
                    } else {
                      await logIn()
                    }
                  }}
                  variant='outline'
                >
                {isAuthenticated ? 'Sign Out' : 'Sign in'}
                </Button>
              </HStack>
            </Flex>
          </Box>
            <Spacer />
            <p
              style={{
                textAlign: 'center',
                lineHeight: '400px',
                fontSize: '35px',
                fontWeight: 700,
              }}
            >
              Schedules all your ToDo’s as if by magic, giving you maximum
              efficiency!
            </p>
          </div>
        </Box>
      </React.Fragment>
    )
}

export default LandingPage
