import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UsersList from "../components/UsersList";
import AdminsList from "../components/AdminsList";

const Admin = () => {
  return (
    <>
      <Heading textAlign={"center"} m={"10"}>
        {" "}
        The Admin Panel
      </Heading>
      <Tabs align="center">
        <Grid gridTemplateColumns={"auto"} gap={5}>
          <GridItem>
            <TabList gap={5} border={"none"} >
              <Tab
                bgColor={"whatsapp.200"}
                width={"40"}
                borderRadius={"3xl"}
                fontSize={"1.2rem"}
                border={"none"}
              >
                Users
              </Tab>
              <Tab
                bgColor={"whatsapp.200"}
                width={"40"}
                borderRadius={"3xl"}
                fontSize={"1.2rem"}
                border={"none"}
              >
                Admins
              </Tab>
            </TabList>
          </GridItem>
          <GridItem maxH={"60vh"} overflowY={"auto"} border={"2px solid red"}>
            <TabPanels>
              <TabPanel>
                <UsersList />
              </TabPanel>
              <TabPanel>
                <AdminsList />
              </TabPanel>
            </TabPanels>
          </GridItem>
        </Grid>
      </Tabs>
    </>
  );
};

export default Admin;
