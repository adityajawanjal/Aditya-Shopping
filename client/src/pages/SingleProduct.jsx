import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/slices/productSlice";
import Loader from "../components/Loader";
import { add, addToCart, remove } from "../redux/slices/cartSlice";

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
  const { qty } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
  }, [dispatch, params.id]);

  if (error) {
    return <h1>Error </h1>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container maxW={"container.lg"}>
        <Grid templateColumns={{ base: "auto", md: "auto auto" }} gap={5}>
          <GridItem>
            <Image
              src={products.image}
              alt="{product.name}"
              w={"96"}
              h={"auto"}
              ml={{ base: "auto", md: "0px" }}
              mr={{ base: "auto", md: "0px" }}
            />
          </GridItem>
          <GridItem>
            <Stack gap={3}>
              <Heading>{products.name}</Heading>
              <Text textAlign={"justify"}>{products.description}</Text>
              <Text>Price : ${products.price}</Text>
              <Text fontWeight={"bold"}>In Stocks : 7</Text>
              <Stack gap={5}>
                <Box>
                  <Button
                    size={"sm"}
                    type={"button"}
                    borderRadius={"full"}
                    p={"1"}
                    mr={"3"}
                    fontSize={"2rem"}
                    onClick={()=>{dispatch(remove())}}
                  >
                    -
                  </Button>
                  <Button size={"lg"} type={"button"} bgColor={"linkedin.100"}>
                    Quantity: {qty}
                  </Button>
                  <Button
                    size={"sm"}
                    type={"button"}
                    borderRadius={"full"}
                    p={"1"}
                    ml={"3"}
                    fontSize={"2rem"}
                    onClick={()=>{dispatch(add())}}
                  >
                    +
                  </Button>
                </Box>
                <Button
                  size={"lg"}
                  type={"button"}
                  bgColor={"red.100"}
                  maxW={"60"}
                  onClick={()=>{dispatch(addToCart({
                    id:products.id,
                    name:products.title,
                    description:products.description,
                    price:products.price,
                    category:products.category,
                    ratings:products.rating,
                    image:products.image,
                    qty:qty
                  }))}}
                >
                  Add to Cart
                </Button>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default SingleProduct;
