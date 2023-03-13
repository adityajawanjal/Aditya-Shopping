import React from "react";
import { Container, HStack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const List = [
    {
      _id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
    {
      _id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
    {
      _id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
    {
      _id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
    {
      _id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
    {
      _id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
    {
      _id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur",
      price: 200,
    },
  ];
  return (
    <>
      <Container maxW={"container.lg"}>
        <HStack flexWrap={"wrap"}>
          {List.map((e) => {
            return <ProductCard key={e._id} product={e} />;
          })}
        </HStack>
      </Container>
    </>
  );
};

export default Products;
