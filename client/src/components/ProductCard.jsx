import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {qty } = useSelector((state)=>state.cart);
  return (
    <>
   
        <Box
          border={"1px solid red"}
          borderRadius={"3xl"}
          w={"56"}
          h={"96"}
          p={"3"}
          bgColor={"azure"}
          m={{base:"5px",sm:"10px"}}

        >
          <Stack alignItems={"center"} gap={1}>
            <Heading as={"h3"} fontSize={"2rem"} noOfLines={1}>
              {product.name}
            </Heading>
           <NavLink to={`/single-product/${product.id}`}>
            <Image
              src={product.image}
              alt="pro1"
              w={"40"}
              h={"32"}
              borderRadius={"3xl"}
            />
            </NavLink>
            <Text noOfLines={3} maxW={"56"} >{product.description}</Text>
            <Text borderBottom={"1px solid black"} p={"1"}>
              Price : {product.price}
            </Text>

            <Button size={"lg"} bgColor={"red.200"} onClick={()=>{dispatch(addToCart({
              id:product.id,
              name:product.title,
              description:product.description,
              price:product.price,
              category:product.category,
              ratings:product.rating,
              image:product.image,
              qty:qty
            }))}} >
              Add to Cart
            </Button>
          </Stack>
        </Box>
    </>
  );
};

export default ProductCard;
