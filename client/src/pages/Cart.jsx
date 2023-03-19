import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("items");
    const items = JSON.parse(data);
    setProducts(items);
  }, []);

  return (
    <>
      <Container maxW={"95vw"}>
        <TableContainer overflowX={"auto"}>
          <Table>
            <Thead>
              <Tr>
                <Th>Sr.No</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>
                      <Image src={e.image} alt={e.name} w={"20"} h={"20"} />
                    </Td>
                    <Td maxW={"20"} overflowX={"hidden"}>
                      {e.name}
                    </Td>
                    <Td>{e.price}</Td>
                    <Td>{e.qty}</Td>
                    <Td>{e.qty * e.price}</Td>
                    <Td>Remove</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <NavLink to={"/payment"}>
          <Button
            type="button"
            size={"lg"}
            bgColor={"whatsapp.100"}
            m={"8"}
            float={"right"}
            fontSize={"1.5rem"}
          >
            Buy Now
          </Button>
        </NavLink>
      </Container>
    </>
  );
};

export default Cart;
