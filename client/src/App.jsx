import React, { useEffect } from "react";
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
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Box bgColor={"pink.200"} minH={"100vh"} p={{ base: "0px", sm: "3" }}>
        <Stack
          justifyContent={"space-between"}
          minH={"100vh"}
          borderRadius={{ base: "0px", sm: "50px" }}
          border={{ base: "10px solid pink", sm: "0px" }}
          p={"5"}
          bgColor={"aliceblue"}
        >
          <BrowserRouter>
            <Box mb={"20"}>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/products" element={<Products />} />
                <Route
                  exact
                  path="/single-product/:id"
                  element={<SingleProduct />}
                />
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
