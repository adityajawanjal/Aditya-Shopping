import React from "react";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const UsersList = () => {
  return (
    <>
      <TableContainer>
        <Table variant={"striped"}>
          <Thead fontSize={{ base: "2xs", sm: "2xl" }}>
            <Tr>
              <Th display={{ base: "none", md: "block" }}>Sr.no</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={{ base: "2xs", sm: "1.2rem" }}>
            <Tr>
              <Td display={{ base: "none", md: "block" }}>1. </Td>
              <Td>Aditya</Td>
              <Td>aditya@gmail.com</Td>
              <Td>
                <NavLink
                  to={"/user-details"}
                  style={{
                    color: "blue",
                    borderBottom: "1px solid blue",
                    padding: "2px",
                  }}
                >
                  View
                </NavLink>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersList;
