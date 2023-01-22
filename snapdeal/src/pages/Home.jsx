import { LastImage } from "../components/LastImage";
import { Link as Routerlink } from "react-router-dom";
import Navbar from "../components/Navbar";
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

import { SliderCard } from "../components/SliderCard";
import FirstMenu from "../components/FirstMenu";
import Carasoual from "../components/Carasoual";
import AppStore from "../components/AppStore";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box h="1650px" w="90%" m={"auto"}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          height={"600px"}
          width={"92%"}
          margin={"auto"}
          marginTop={"20px"}
        >
          <Box width="12%" height="400px" alignSelf="flex-start">
            <FirstMenu />
          </Box>
          <Box width="67%" height="600px">
            <Carasoual />
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
            <Routerlink to="/login">
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
            </Routerlink>
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
          flexDirection="column"
          // borderWidth="1px"
          // borderColor="red"
          // borderStyle="solid"
          height={"400px"}
        >
          <SliderCard />
          {/* <SliderCard /> */}
        </Flex>
        <Flex
          // borderWidth="1px"
          // borderColor="red"
          // borderStyle="solid"
          marginTop={"20px"}
          height={"600px"}
        >
          <AppStore />
        </Flex>
      </Box>
    </>
  );
}
