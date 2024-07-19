import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Box, Flex } from "@sparrowengg/twigs-react";
import API from "api";
import Image from "../assets/240-Website-Down.svg";

/**
 * This `ServerDown` function is a React component that displays a message and an image when the server
 * is down.
 * @date 2024-07-17
 * @param {any} {children}
 * @returns {any}
 */
function ServerDown({ children }) {
  const [serverDown, setServerDown] = useState(true);
  useEffect(() => {
    const getHeartBeat = async () => {
      try {
        const data = await API.get();
        if (data.data === "SparrowMart") setServerDown(false);
      } catch (err) {
        console.log("Server Down!!", err);
      }
    };
    getHeartBeat();
  });
  return serverDown ? (
    <Flex
      css={{ height: "100vh", width: "100vw" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        css={{
          fontFamily: "sans-serif",
          fontSize: "$2xl",
          fontWeight: "bolder",
          color: "$primary400",
        }}
      >
        OOPS!! SERVER DOWN
      </Box>
      <img src={Image} alt="Server Down" />
    </Flex>
  ) : (
    <>{children}</>
  );
}

ServerDown.propTypes = {
  children: PropTypes.any,
};

export default ServerDown;
