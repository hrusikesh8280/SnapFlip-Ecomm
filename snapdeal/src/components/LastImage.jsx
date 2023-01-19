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
    "https://images.pexels.com/photos/5625071/pexels-photo-5625071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7621009/pexels-photo-7621009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://img.freepik.com/free-vector/summer-colection-banner-with-hand-drawn-flowers_1188-312.jpg?w=1380&t=st=1674125182~exp=1674125782~hmac=d7eb387c829a2faaa9f10822be0ee7ce17a61196f46b2c2082dae5ef60ec5a90",
    "https://images.pexels.com/photos/7621009/pexels-photo-7621009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
