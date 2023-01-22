import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Stack,
  Button,
  Card,
  Image,
  Text,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const getData = async ({ page, order, limit = 12 }) => {
  return fetch(
    `https://good-tan-rabbit-boot.cyclic.app/products?_page=${page}&_limit=${limit}&_order=${order}&_sort=price`
  ).then((res) => res.json());
};

const Produccts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("desc");
  const [total, setTotal] = useState();

  useEffect(() => {
    setLoading(true);
    getData({ page, order, limit })
      .then((res) => {
        setProducts(res);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page, order, limit]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Box
        h={"1560px"}
        width={"85%"}
        m={"auto"}
        //   border={"1px solid red"}
        mt={"50px"}
      >
        <Box h={100} w={"24%"} m={"auto"}>
          <Stack direction={"row"} justifyContent="space-between">
            <Button
              //   isDisabled={order === "asc"}
              onClick={() => setOrder("asc")}
              background={"darksalmon"}
              _hover={{
                background: "lightgreen",
                color: "darkblue",
                fontSize: "xl",
              }}
            >
              Price Low to High
            </Button>
            <Button
              //   isDisabled={order === "desc"}
              background={"darksalmon"}
              disabled={order === "desc"}
              onClick={() => setOrder("desc")}
              _hover={{
                background: "lightgreen",
                color: "darkblue",
                fontSize: "xl",
              }}
            >
              Price High To Low
            </Button>
          </Stack>
        </Box>
        <Box>
          <Grid
            width={"90%"}
            templateColumns="repeat(4, 1fr)"
            gap={"70px"}
            m={"auto"}
            mt={"30px"}
          >
            {products.map((el) => (
              <Card
                mt={"26px"}
                _hover={{
                  boxShadow: "2xl",
                }}
                height="340px"
                width={"340px"}
                key={el.id}
              >
                <ProductCard
                  id={el.id}
                  image={el.image}
                  name={el.description}
                  price={el.price}
                  stars={el.stars}
                />
              </Card>
            ))}
          </Grid>
        </Box>
        <Box h={100} w={"24%"} m={"auto"} mt={"60px"}>
          <Stack direction={"row"}>
            <Button
              isDisabled={page === 1}
              onClick={() => setPage(page - 1)}
              background={"powderblue"}
              width={"200px"}
            >
              PRVIOUS
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              background={"powderblue"}
              width={"200px"}
            >
              NEXT
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Produccts;
