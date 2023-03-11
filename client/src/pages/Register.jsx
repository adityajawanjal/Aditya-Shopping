import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(name, email, password);
  };

  return (
    <>
      <Container maxW={"container.sm"}>
        <Stack gap={5}>
          <FormControl>
            <FormLabel fontSize={"1.3rem"} mb={"2"}>
              Name :{" "}
            </FormLabel>
            <Input
              type={"text"}
              name={"name"}
              bgColor={"whiteAlpha.900"}
              size={"lg"}
              placeholder={"Enter Your Name"}
              border={"2px solid blue"}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name ? name : ""}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"1.3rem"} mb={"2"}>
              Email :{" "}
            </FormLabel>
            <Input
              type={"email"}
              name={"email"}
              bgColor={"whiteAlpha.900"}
              size={"lg"}
              placeholder={"Enter Your Email"}
              border={"2px solid blue"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email ? email : ""}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"1.5rem"} mb={"2"}>
              Password :{" "}
            </FormLabel>
            <Input
              type={"password"}
              name={"password"}
              bgColor={"whiteAlpha.900"}
              size={"lg"}
              placeholder={"Enter Your Password"}
              border={"2px solid blue"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password ? password : ""}
            />
          </FormControl>
          <Button
            type="submit"
            size={"lg"}
            bgColor={"linkedin.100"}
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Register;
