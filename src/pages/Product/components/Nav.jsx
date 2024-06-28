import React from 'react'
import logo from '../../../assets/surveysparrow_logo.jpeg'
import { Flex, Avatar, Box } from '@sparrowengg/twigs-react'

function Nav() {
    return (
      <Flex
        css={{
          height: 80,
          margin: 10,
          padding: 20,
          borderRadius: 20,
          background: "$primary300",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap={20}>
          <Avatar src={logo} name="sparrow" size="2xl" />
          <Box
            css={{
              fontSize: "$2xl",
              color: "$white900",
              fontFamily: "sans-serif",
              letterSpacing: 1,
              fontWeight: "$9",
            }}
          >
            SPARROWMART
          </Box>
        </Flex>
        <Flex></Flex>
      </Flex>
    );
}

export default Nav