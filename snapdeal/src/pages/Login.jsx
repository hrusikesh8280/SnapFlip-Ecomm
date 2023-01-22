import { Link as Routerlink } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const { login, isAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const userDetails = {
      email,
      password,
    };
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        login(json.token);
        console.log(json.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <Flex
        // border={"2px solid red"}
        minH={"70vh"}
        width={"60%"}
        m={"auto"}
        align={"center"}
        justify={"center"}
        bg={"white"}
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
            bg={"white"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
            }
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
                  onClick={handleSubmit}
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
                <Routerlink to="/register">
                  <button style={{ color: "blue" }}>Register</button>
                </Routerlink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
//eve.holt@reqres.in
//eve.holt@reqres.in
