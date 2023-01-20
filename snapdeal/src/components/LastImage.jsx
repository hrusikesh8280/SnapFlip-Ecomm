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
} from "@chakra-ui/react";

export const LastImage = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmxZcwdU0-ubIF-LDUeHR_4Xd_jgEZ6cw5g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBn_EaOjuC5tatUq0zos317kymw2WAIiYAg&usqp=CAU",
    "https://hungamadeal.co.in/wp-content/uploads/2016/06/snapdeal-offer.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmxZcwdU0-ubIF-LDUeHR_4Xd_jgEZ6cw5g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBn_EaOjuC5tatUq0zos317kymw2WAIiYAg&usqp=CAU",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Stack align="center" justifyContent="flex-end">
      <img src={images[currentIndex]} alt="image" />

      <Button margin={"auto"} width={"50px"} onClick={handleNext}>
        Next
      </Button>
    </Stack>
  );
};
