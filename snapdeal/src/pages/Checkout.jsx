import React from "react";
import { Stack, Card, Image, Button, Text, Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link as Routerlink } from "react-router-dom";

function Checkout() {
  const [data, setdata] = useState([]);
  const [price, setPrice] = useState(0);

  const getcartData = () => {
    const cartData = JSON.parse(localStorage.getItem("CartData")) || [];
    setdata(cartData);
  };
  useEffect(() => {
    getcartData();
  }, []);

  useEffect(() => {
    let totalAmount = 0;
    data.forEach((el) => {
      console.log(el);
      totalAmount += el.price;
    });
    setPrice(totalAmount);
  }, [data]);
  console.log(data);

  const handleDelete = (id) => {
    alert("Are you want to delete this?");
    let d = data.filter((el) => el.id != id);
    setdata(d);
    localStorage.setItem("CartData", JSON.stringify(d));
  };

  return (
    <>
      <Navbar />

      <Box mt={"100px"} justifyContent="space-between" marginBottom={"100px"}>
        {data.map((el) => {
          return (
            <Box>
              <Card height="150px" margin={"auto"} width={"800px"}>
                <Flex flexDirection="row" alignItems="center" spacing={14}>
                  <Box marginRight={"50px"}>
                    <Image src={el.image} style={{ height: 140, width: 200 }} />
                  </Box>
                  <Text marginRight={"20px"}>{el.description}</Text>
                  <Box marginRight={"150px"}>
                    <Text>Price:{el.price}</Text>
                  </Box>
                  <Box marginRight={4}>
                    <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                  </Box>
                </Flex>
              </Card>
            </Box>
          );
        })}
        <Box
          marginLeft={"1500px"}
          border={"1px solid red"}
          marginTop={"-200px"}
          w={"280px"}
          bg={"darksalmon"}
        >
          <Box p={5} shadow="md" borderWidth="5px">
            <Text as="samp" fontSize={"20px"} mb={2}>
              Total Amount: {price}
            </Text>
            <Routerlink to="/modelmsg">
              <Button
                bg={"darkcyan"}
                marginTop={"60px"}
                _hover={{ bg: "green.500", fontSize: "xl", color: "black" }}
                color={"wheat"}
                variantColor="green"
                onClick={() => alert("Checkout Now!")}
              >
                Checkout Now
              </Button>
            </Routerlink>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Checkout;
