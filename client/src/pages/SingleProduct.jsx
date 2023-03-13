import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const SingleProduct = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Grid templateColumns={"auto auto"} gap={5}>
          <GridItem>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ746zHrs66nDKaAV6ctxOinwVd5MVo7h2frT8BdvZ0&s"
              alt="phooo"
              w={"96"}
              h={"auto"}
            />
          </GridItem>
          <GridItem>
            <Stack gap={3}>
              <Heading>Title of product</Heading>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                ullam enim incidunt molestias, non laboriosam possimus fuga
                rerum debitis ea necessitatibus tenetur corporis architecto quos
                consequatur iure voluptatibus sed minus?
              </Text>
              <Text fontWeight={"bold"}>In Stocks : 10</Text>
              <HStack gap={5}>
                <Box>
                  <Button
                    size={"sm"}
                    type={"button"}
                    borderRadius={"full"}
                    p={"1"}
                    mr={"3"}
                    fontSize={"2rem"}
                  >
                    -
                  </Button>
                  <Button size={"lg"} type={"button"} bgColor={"linkedin.100"}>
                    Quantity: 2
                  </Button>
                  <Button
                    size={"sm"}
                    type={"button"}
                    borderRadius={"full"}
                    p={"1"}
                    ml={"3"}
                    fontSize={"2rem"}
                  >
                    +
                  </Button>
                </Box>
                <Button size={"lg"} type={"button"} bgColor={"red.100"}>
                  Add to Cart
                </Button>
              </HStack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default SingleProduct;
