// Loader as HOC component

import React from 'react'
import { CircleLoader, Flex } from "@sparrowengg/twigs-react";

function Loader(WrappedComponet) {
    return (props) => {
      return props.loading ? (
        <Flex
          css={{ height: "80vh", width: "100vw" }}
          justifyContent="center"
          alignItems="center"
        >
          <CircleLoader size={"2xl"} color={"primary"} />
        </Flex>
      ) : (
        <WrappedComponet {...props} />
      );
    } 
}

export default Loader