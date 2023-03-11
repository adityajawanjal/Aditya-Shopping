import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Box bgColor={"pink.200"} minH={"100vh"} p={"3"}>
        <Stack
          justifyContent={"space-between"}
          minH={"100vh"}
          borderRadius={"50px"}
          p={"5"}
          bgColor={"aliceblue"}
        >
          <BrowserRouter>
            <Box mb={"28"}>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Box>
            <Footer />
          </BrowserRouter>
        </Stack>
      </Box>
    </>
  );
};

export default App;
