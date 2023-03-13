import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        p={"3"}
        borderBottom={"1px solid gray"}
      >
        <HStack gap={1}>
          <Box bgColor={"gray.100"}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
                alt="facebook"
                w={"6"}
                h={"6"}
                borderRadius={"full"}
              />
            </a>
          </Box>
          <Box bgColor={"gray.100"}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
                alt="facebook"
                w={"6"}
                h={"6"}
                borderRadius={"full"}
              />
            </a>
          </Box>
          <Box bgColor={"gray.100"}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
                alt="facebook"
                w={"6"}
                h={"6"}
                borderRadius={"full"}
              />
            </a>
          </Box>
          <Box bgColor={"gray.100"}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
                alt="facebook"
                w={"6"}
                h={"6"}
                borderRadius={"full"}
              />
            </a>
          </Box>
        </HStack>
        <Box>Free Shipping this week !</Box>
        <HStack gap={1}>
          <Box>USD</Box>
          <Box>English</Box>
        </HStack>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        p={"5"}
        borderBottom={"1px solid gray"}
      >
        <HStack gap={1} justifyContent={"right"}>
          <Heading textAlign={"center"}>Axon Shop</Heading>
        </HStack>
        <Box>
          <InputGroup>
            <Input
              type={"search"}
              placeholder={"Search Product here..."}
              size={"lg"}
              border={"2px solid blue"}
              bgColor={"whiteAlpha.900"}
              w={"96"}
            />
            <InputRightElement>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERxcONzveIH4NOIQQL7o_36yynz1Pa3hf9g8L7gg&s"
                p={"2"}
                borderRadius={"full"}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <HStack gap={1}>
          <NavLink to={"/profile"}>
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile"
              w={"10"}
              h={"10"}
              borderRadius={"3xl"}
            />
          </NavLink>
          <NavLink to={"/cart"}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
              alt="profile"
              w={"10"}
              h={"10"}
              borderRadius={"full"}
            />
          </NavLink>
        </HStack>
      </HStack>
      <HStack h={"14"} gap={2} justifyContent={"center"} mb={"8"}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </HStack>
    </>
  );
};

export default Navbar;
