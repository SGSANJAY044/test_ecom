import { Box, Button, Flex, Grid, Text } from "@sparrowengg/twigs-react";
import React from "react";
import Skeleton from "react-loading-skeleton";

function HomeFeedSkeletonCard() {
  return (
    <Flex
      css={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        padding: 20,
        borderRadius: 15,
        height: "45vh",
        width: "40vh",
      }}
      alignItems="center"
      flexDirection="column"
      gap={30}
    >
      <Skeleton height={220} width={300} />
      <Skeleton height={20} width={300}></Skeleton>
      <Flex
        css={{
          gap: 10,
        }}
      >
        <Skeleton
          css={{
            padding: 20,
            fontFamily: "monospace",
            fontSize: "$md",
            cursor: "pointer",
          }}
          height={40}
          width={120}
        ></Skeleton>
        <Skeleton
          css={{
            padding: 20,
            fontFamily: "monospace",
            fontSize: "$md",
            cursor: "pointer",
          }}
          height={40}
          width={120}
        ></Skeleton>
      </Flex>
    </Flex>
  );
}
function HomeFeedSkeleton() {
  return (
    <>
      <Box css={{ margin: 10 }}>
        <Skeleton height={80} borderRadius={20} margin={10}></Skeleton>
      </Box>
      <Flex css={{ padding: 10 }} justifyContent="end" gap={10}>
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width={30} />
      </Flex>
      <Grid css={{ padding: 10 }} width={300} gap={[70, 20]}>
        {[...Array(6)].map((index, value) => (
          <HomeFeedSkeletonCard />
        ))}
      </Grid>
    </>
  );
}

export default HomeFeedSkeleton;
