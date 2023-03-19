import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <>
      <Center h={"50vh"}>
        <Spinner
          thickness="5px"
          size={"xl"}
          speed={"0.65s"}
          emptyColor={"gray.200"}
          color={"blue.200"}
        />
      </Center>
    </>
  );
};

export default Loader;
