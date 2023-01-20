import React from "react";

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

const AppStore = () => {
  return (
    <Stack
      margin={"auto"}
      width={"1600px"}
      height={"600px"}
      position={"relative"}
      display="flex"
      alignItems="center"
      // borderWidth="1px"
      // borderColor="red"
      // borderStyle="solid"
    >
      <Image
        src="https://img.freepik.com/free-photo/super-excited-woman-holding-up-smartphone-shopping-bags_23-2148684511.jpg?w=1480&t=st=1674215740~exp=1674216340~hmac=779bfae78e1c80d7dca527acd86c8693640f43e54c913a4efd4d7d14347a77b6"
        objectFit="cover"
        width="100%"
        maxHeight="100%"
      />
      <Text
        as="samp"
        fontSize="43px"
        fontWeight={"bold"}
        position="absolute"
        zIndex={1}
        top="20%"
        left="62%"
        transform="translate(-10%, -10%)"
      >
        Download Our App Now
      </Text>
      <Text
        position="absolute"
        zIndex={1}
        top="40%"
        left="72%"
        transform="translate(-50%, -50%)"
      >
        Fast, Simple & Delightful. All it takes is 30 seconds to Download.
      </Text>
      <Image
        cursor="pointer"
        zIndex={1}
        top="40%"
        left="24%"
        transform="translate(86%, -350%)"
        src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
        objectFit="cover"
        width="30%"
        height="100%"
      />
    </Stack>
  );
};

export default AppStore;
