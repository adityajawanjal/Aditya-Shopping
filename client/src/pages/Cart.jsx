import React from "react";
import { Button, Container, HStack, Stack, Text } from "@chakra-ui/react";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <>
      <Container maxW={"95vw"}>
        <HStack
          justifyContent={"space-around"}
          minW={"full"}
          p={"5"}
          mt={"3"}
          borderBottom={"2px solid black"}
        >
          <Text fontWeight={"bold"}>Sr.No</Text>
          <Text fontWeight={"bold"}>Image</Text>
          <Text fontWeight={"bold"}>Name</Text>
          <Text fontWeight={"bold"}>Price</Text>
          <Text fontWeight={"bold"}>Quantity</Text>
          <Text fontWeight={"bold"}>Total</Text>
          <Text fontWeight={"bold"}>Remove</Text>
        </HStack>
        <Stack>
          <CartCard />
          <CartCard />
          <CartCard />
        </Stack>
        <Button
          type="button"
          size={"lg"}
          bgColor={"whatsapp.100"}
          m={"8"}
          float={"right"}
          fontSize={"1.5rem"}
        >
          Buy Now
        </Button>
      </Container>
    </>
  );
};

export default Cart;
