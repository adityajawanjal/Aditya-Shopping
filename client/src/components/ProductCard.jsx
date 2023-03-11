import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <>
      <Box
        border={"1px solid red"}
        borderRadius={"3xl"}
        w={"56"}
        h={"96"}
        p={"3"}
        bgColor={"azure"}
      >
        <Stack alignItems={"center"} gap={1}>
          <Heading as={"h3"} fontSize={"2rem"} noOfLines={1}>
            Hoodie
          </Heading>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s"
            alt="pro1"
            w={"90%"}
            borderRadius={"3xl"}
          />
          <Text noOfLines={2}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing.
          </Text>
          <Text borderBottom={"1px solid black"} p={"1"}>
            Price : 200
          </Text>
          <Button size={"lg"} bgColor={"red.200"}>
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ProductCard;
