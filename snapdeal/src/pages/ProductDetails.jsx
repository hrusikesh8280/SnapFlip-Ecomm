import React from "react";
import { useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import axios from "axios";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import ModalEffect from "../components/ModalEffect";
import Navbar from "../components/Navbar";

const initialState = {
  products: [],
  isLoading: true,
  isError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case "FETCH_FAILURE":
      return {
        products: [],
        isLoading: false,
        isError: "Something went Worng....",
      };
    default:
      throw new Error();
  }
};

const ProductDetails = () => {
  const [isAdded, setIsAdded] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { products, isError, isLoading } = state;

  const { id } = useParams();

  const getData = async () => {
    axios
      .get(`https://good-tan-rabbit-boot.cyclic.app/products/${id}`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE", payload: err });
      });
  };

  useEffect(() => {
    getData();
  }, [id]);
  const { image, description, price } = products;

  const handleAddToCart = () => {
    setIsAdded(true);
    let data = JSON.parse(localStorage.getItem("CartData")) || [];
    data = [...data, products];
    localStorage.setItem("CartData", JSON.stringify(data));
    // console.log(data, "hruuuu");
  };

  return (
    <>
      <Navbar />
      <div>
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={image}
                align={"center"}
                w={"85%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.8}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {description}
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  Price: {price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  {/* <Text fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text> */}
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Best Review On this Product</ListItem>
                      <ListItem>Master Certified</ListItem>{" "}
                      <ListItem>Tachymeter</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Easy Payment Methode</ListItem>
                      <ListItem>Product Assure 100%</ListItem>
                      <ListItem>Easy Return Policy</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Between lugs:
                      </Text>{" "}
                      20 mm
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Bracelet:
                      </Text>{" "}
                      leather strap
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Case:
                      </Text>{" "}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Case diameter:
                      </Text>{" "}
                      42 mm
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Dial color:
                      </Text>{" "}
                      Black
                    </ListItem>
                    {/* <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem> */}
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Water resistance:
                      </Text>{" "}
                      5 bar (50 metres / 167 feet){" "}
                    </ListItem>
                  </List>
                </Box>
              </Stack>
              <Stack
                width={"450px"}
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Button
                  rounded={"none"}
                  w={"200px"}
                  mt={5}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("red.500", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>

                <Button
                  rounded={"none"}
                  w={"200px"}
                  mt={5}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("red.500", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  <ModalEffect
                    image={image}
                    description={description}
                    price={price}
                  />
                </Button>
              </Stack>
              {isAdded && (
                <p
                  style={{
                    color: "brown",
                    fontSize: "24px",
                    marginLeft: "-80px",
                  }}
                >
                  Product added to cart successfully!
                </p>
              )}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
