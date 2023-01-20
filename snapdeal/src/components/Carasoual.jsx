import React from "react";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
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
import { SliderCard } from "../components/SliderCard";
import Slider from "react-slick";

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
const Carasoual = () => {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "",
      text: "",
      image:
        "https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=1800&t=st=1674124428~exp=1674125028~hmac=d62463b85b707b1dee391ba6643a8317e3980c661796cae7c434d925f55cd773",
    },
    {
      title: "",
      text: ".",
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
      title: "",
      text: "",
      image:
        "https://img.freepik.com/free-vector/gradient-flash-sale-background_23-2149027975.jpg?w=1380&t=st=1674124461~exp=1674125061~hmac=3daa622954fa3ad532a9fc28b79ea64ba46ff562aa1c20784862437e1f6e03a2",
    },
    {
      title: "",
      text: "",
      image:
        "https://images.pexels.com/photos/12955707/pexels-photo-12955707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
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
              <Container size="container.lg" height="400px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    color={"Yellow"}
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  >
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Carasoual;
