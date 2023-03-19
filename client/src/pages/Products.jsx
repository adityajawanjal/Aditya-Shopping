import React from "react";
import { Container, HStack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Loader from "./../components/Loader";

const Products = () => {
  const { loading, products, error } = useSelector((state) => state.products);

  if (error) {
    return <h1>Error occured</h1>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container
        maxW={{
          base: "container.sm",
          md: "container.xl",
          lg: "container.sm",
          xl: "90vw",
        }}
        textAlign={"center"}
      >
        <HStack flexWrap={"wrap"} justifyContent={{ base: "center" }}>
          {products.map((e) => {
            return <ProductCard key={e.id} product={e} />;
          })}
        </HStack>
      </Container>
    </>
  );
};

export default Products;
