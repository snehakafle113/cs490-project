import React, { Component } from 'react'

import { LockIcon } from '@chakra-ui/icons'
import { Flex, HStack, Spacer, Text, Box, Button } from '@chakra-ui/react'

import Background from 'src/assets/background.png'
import Logo from 'src/assets/logo.png'

//import { Link, routes } from '@redwoodjs/router'
//import { MetaTags } from '@redwoodjs/web'

class LandingPage extends Component {
  render() {
    //let heading = 'Soaring to new heights'
    //let subheading =
    //'Lorem ipsum asoidj iASJBFodsjf sajnfaisudhf aksdjfnasdiuf aisudjocaisdjff fa, sdfoijasdf asclvkjo DFuhdfjsndf oijOIDF ndf oijdflsk.'

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
            <Flex>
              <HStack spacing="17px">
                <Box>
                  <img src={Logo} alt="image" width="50" height="50" />
                </Box>
                <Box>
                  <Text fontsize="4xl" as="b">
                    EnchantingTable
                  </Text>
                  <Spacer />
                </Box>
              </HStack>
              <Spacer />
              <Button leftIcon={<LockIcon />} variant="outline">
                Sign In
              </Button>
            </Flex>
            <Spacer />
          </div>
        </Box>
      </React.Fragment>
    )
  }
}

export default LandingPage

/*<div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{subheading}</h2>
              </div>
              <Button className="button is-large is-primary" id="learn">
                Learn more
              </Button>
            </div>
          </div>
        </section>
      </div>*/
