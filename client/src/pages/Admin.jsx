import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Heading textAlign={"center"} m={"5"}>
        {" "}
        The Admin Panel
      </Heading>
      <Stack
        border={"2px solid red"}
        borderRadius={"3xl"}
        w={"96"}
        p={"5"}
        gap={4}
      >
        <Box
          bgColor={"whatsapp.100"}
          borderRadius={"full"}
          p={"3"}
          textAlign={"center"}
          fontSize={"1.5rem"}
        >
          <NavLink to={"/add-product"}>Add Product</NavLink>
        </Box>
        <Box
          bgColor={"whatsapp.100"}
          borderRadius={"full"}
          p={"3"}
          textAlign={"center"}
          fontSize={"1.5rem"}
        >
          <NavLink to={"/add-product"}>Add Product</NavLink>
        </Box>
        <Box
          bgColor={"whatsapp.100"}
          borderRadius={"full"}
          p={"3"}
          textAlign={"center"}
          fontSize={"1.5rem"}
        >
          <NavLink to={"/add-product"}>Add Product</NavLink>
        </Box>
      </Stack>
    </>
  );
};

export default Admin;
