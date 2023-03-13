import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handleSubmit = () => {
    console.log(product);
  };
  return (
    <>
      <NavLink to={`/single-product/${product._id}`} style={{ margin: "10px" }}>
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
              src={product.img}
              alt="pro1"
              w={"90%"}
              borderRadius={"3xl"}
            />
            <Text noOfLines={2}>{product.text}</Text>
            <Text borderBottom={"1px solid black"} p={"1"}>
              Price : {product.price}
            </Text>

            <Button size={"lg"} bgColor={"red.200"} onClick={handleSubmit}>
              See Details
            </Button>
          </Stack>
        </Box>
      </NavLink>
    </>
  );
};

export default ProductCard;
