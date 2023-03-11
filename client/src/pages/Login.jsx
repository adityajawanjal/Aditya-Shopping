import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <>
      <Container maxW={"container.sm"}>
        <Stack gap={5}>
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
            Login
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
