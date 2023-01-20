import Navbar from "../components/Navbar";
import Footer from "./Footer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Navbar />
      <Flex
        // border={"2px solid red"}
        minH={"70vh"}
        width={"80%"}
        m={"auto"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack marginLeft={"80px"} align={"center"}>
            <Heading fontSize={"3xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            // border={"2px solid red"}
            width={"600px"}
            height={"450px"}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                    fontSize: "xl",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack>
                <Text>Dont have account?</Text>
                <button style={{ color: "blue" }}>Register</button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
