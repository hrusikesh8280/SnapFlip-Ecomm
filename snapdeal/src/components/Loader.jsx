import React from "react";
import { Image, Box, Stack, Center } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";
const Loader = () => {
  return (
    <>
      <Navbar />
      <Box marginTop={"50px"}>
        <Stack>
          <center>
            <Image
              width={"30%"}
              src="https://media0.giphy.com/media/c8aGETyW640Fi/200.webp?cid=ecf05e47fues9lpvxmkudh7s8wp1vx2vloxhl85uvpum2l59&rid=200.webp&ct=g"
            ></Image>
          </center>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Loader;
