import React from "react";
import { Button, Heading, HStack, Image, Text } from "@chakra-ui/react";

const CartCard = () => {
  return (
    <>
      <HStack
        justifyContent={"space-around"}
        border={"2px solid red"}
        borderRadius={"3xl"}
        p={"3"}
        mt={"4"}
      >
        <Heading>1. </Heading>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s"
          borderRadius={"3xl"}
          w={"40"}
          alt={"imgha"}
        />
        <Text fontWeight={"bold"}>khhdflahlhlh</Text>
        <Text>$250</Text>
        <Text>5</Text>
        <Text>$1250</Text>
        <Button type="button" size={"lg"} bgColor={"red.200"}>
          {" "}
          Remove
        </Button>
      </HStack>
    </>
  );
};

export default CartCard;
