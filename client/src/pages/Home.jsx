import React, { useState } from "react";
import { Button, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import ReactSimplyCarousel from "react-simply-carousel";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <Center>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          autoplayDirection={"forward"}
          itemsToShow={1}
          centerMode={true}
          autoplay={true}
          autoplayDelay={1}
          onAfterChange={setActiveSlideIndex}
          persistentChangeCallbacks={true}
          speed={4500}
          infinite={true}
          easing="linear"
        >
          <Image
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="pic1"
            objectFit={"fill"}
            borderRadius={"3xl"}
            minW={"70vw"}
            h={{ base: "250px", md: "400px" }}
          />
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="pic1"
            objectFit={"fill"}
            borderRadius={"3xl"}
            minW={"70vw"}
            h={{ base: "250px", md: "400px" }}
          />
          <Image
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
            alt="pic1"
            objectFit={"fill"}
            borderRadius={"3xl"}
            minW={"70vw"}
            h={{ base: "250px", md: "400px" }}
          />
        </ReactSimplyCarousel>
      </Center>
      <Center mt={"14"}>
        <VStack maxW={"container.sm"} gap={5}>
          <Heading>Lorem ipsum dolor sit amet.</Heading>
          <Text textAlign={"justify"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            exercitationem nemo sequi nam aut ipsam alias nihil libero facilis
            hic dignissimos labore animi, doloremque dolorem neque? Praesentium
            suscipit minus asperiores placeat, quo eos nobis a ex inventore!
            Ipsam neque tempore modi perspiciatis accusantium! Optio
            exercitationem eius, ad similique quos ut!
          </Text>
          <NavLink to={"/products"}>
            <Button type="button" size={"lg"} bgColor={"linkedin.100"}>
              Products
            </Button>
          </NavLink>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
