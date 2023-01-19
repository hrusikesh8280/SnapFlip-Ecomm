
import { LastImage } from "../components/LastImage";
import { SliderCard } from "../components/SliderCard";
import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Button,
  Icon,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Slider from "react-slick";
import { FiHeart } from "react-icons/fi";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.pexels.com/photos/7621009/pexels-photo-7621009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "",
      text: "",
      image:
        "https://img.freepik.com/free-vector/summer-colection-banner-with-hand-drawn-flowers_1188-312.jpg?w=1380&t=st=1674125182~exp=1674125782~hmac=d7eb387c829a2faaa9f10822be0ee7ce17a61196f46b2c2082dae5ef60ec5a90",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.pexels.com/photos/5624985/pexels-photo-5624985.jpeg",
    },
  ];

  return (
    <>
      <Box h="1200px" w="90%" m={"auto"} border="2px solid black">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          borderWidth="1px"
          borderColor="red"
          borderStyle="solid"
          height={"600px"}
          width={"88%"}
          margin={"auto"}
          marginTop={"20px"}
        >
          <Box
            width="14%"
            height="400px"
            alignSelf="flex-start"
            // border="1px solid blue"
            boxShadow={
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            }
          >
            <Stack align="center" spacing={3}>
              <Button
                _hover={{ color: "blue.300", fontSize: "xl" }}
                variantColor="teal"
                width="100%"
                height="40px"
              >
                Button 1
              </Button>
              <Button
                _hover={{ color: "blue.300", fontSize: "xl" }}
                variantColor="teal"
                width="100%"
                height="40px"
              >
                Button 2
              </Button>
              <Button
                _hover={{ color: "blue.300", fontSize: "xl" }}
                variantColor="teal"
                width="100%"
                height="40px"
              >
                Button 3
              </Button>
              <Button
                variant="outline"
                _hover={{ color: "blue.300", fontSize: "xl" }}
                width="100%"
                height="40px"
                variantColor="teal"
              >
                Button 4
              </Button>
              <Button width="100%" _hover={{ transform: "translateX(40px)" }}>
                <Text>Button 1</Text>
              </Button>
              <Button width="100%" _hover={{ transform: "translateX(40px)" }}>
                <Text>Button 1</Text>
              </Button>
              <Button variantColor="teal" width="100%" height="40px">
                Button 7
              </Button>
              <Button variantColor="teal" width="100%" height="40px">
                Button 8
              </Button>
            </Stack>
          </Box>
          <Box width="70%" height="600px" border="1px solid blue">
            <Box
              position={"relative"}
              height={"540px"}
              width={"100%"}
              overflow={"hidden"}
              margin={"auto"}
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
              }
            >
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />

              <IconButton
                // _hover={{ bg: "red.500" }}
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
              >
                <BiLeftArrowAlt size="40px" />
              </IconButton>

              <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
              >
                <BiRightArrowAlt size="40px" />
              </IconButton>

              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                  <Box
                    key={index}
                    height={"xl"}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}
                  >
                    <Container
                      size="container.lg"
                      height="200px"
                      position="relative"
                    >
                      <Stack
                        spacing={6}
                        w={"full"}
                        maxW={"lg"}
                        position="absolute"
                        top="50%"
                        transform="translate(0, -50%)"
                      >
                        <Heading
                          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        >
                          {card.title}
                        </Heading>
                        <Text
                          fontSize={{ base: "md", lg: "lg" }}
                          color="GrayText"
                        >
                          {card.text}
                        </Text>
                      </Stack>
                    </Container>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
          <Box
            px={2}
            alignSelf={"flex-start"}
            width="250px"
            height="400px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            // border="1px solid blue"
          >
            <LastImage />
            <Text padding={"10px"} size={"small"}>
              Login to your Snapdeal account{" "}
            </Text>
            <Button
              width={"120px"}
              height={"37px"}
              rounded="none"
              background={"black"}
              color={"white"}
              _hover={{ bg: "blue" }}
            >
              LOGIN
            </Button>
            <Box>
              <Text padding={"10px"} textAlign="left">
                <span style={{ color: "#999999" }}>New User?</span>
                <span style={{ color: "white" }}> ..</span>
                <span m={4} style={{ color: "blue" }}>
                  Register
                </span>
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          align="center"
          justify="center"
          flexDirection="column"
          borderWidth="1px"
          borderColor="red"
          borderStyle="solid"
          height={"300px"}
        >
          {/* <SliderCard /> */}
        </Flex>
      </Box>
    </>
  );
}
=======

