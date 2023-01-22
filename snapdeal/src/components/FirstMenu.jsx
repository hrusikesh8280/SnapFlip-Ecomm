import React from "react";
import { FcHome } from "react-icons/fc";
import { GoArchive } from "react-icons/go";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { TbToolsKitchen } from "react-icons/tb";
import { FaMailchimp } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { BsLaptop } from "react-icons/bs";
import { Link as Routerlink } from "react-router-dom";

import { Stack, Text, Button } from "@chakra-ui/react";

const FirstMenu = () => {
  return (
    <Stack align="center" spacing={2}>
      <Routerlink to="/">
        <Button
          align="start"
          variant="outline"
          leftIcon={<FcHome size={"26px"} />}
          width="200px"
          textAlign={"right"}
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
        >
          <Text fontSize="sm">HOME</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          variant="outline"
          leftIcon={<GoArchive size={"19px"} />}
          width="200px"
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
        >
          <Text> PRODUCTS</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          variant="outline"
          leftIcon={<FcBusinessman size={"24px"} />}
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
          variantColor="teal"
          width="200px"
        >
          <Text>Men's Fashion</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          leftIcon={<FcBusinesswoman size={"24px"} />}
          variant="outline"
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
          width="200px"
          variantColor="teal"
        >
          <Text> Women's Fashion</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          variant="outline"
          leftIcon={<TbToolsKitchen size={"24px"} />}
          width="200px"
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
        >
          <Text>Home & Kitchen</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          variant="outline"
          leftIcon={<FaMailchimp size={"24px"} />}
          width="200px"
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
        >
          <Text>Kids Fashion</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          variant="outline"
          leftIcon={<GiBeachBag size={"20px"} />}
          width="200px"
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
        >
          <Text>Beauty & Health</Text>
        </Button>
      </Routerlink>
      <Routerlink to="/products">
        <Button
          variant="outline"
          leftIcon={<BsLaptop size={"20px"} />}
          width="200px"
          _hover={{ transform: "translateX(20px)", background: "red.300" }}
        >
          <Text>Electronics</Text>
        </Button>
      </Routerlink>
    </Stack>
  );
};

export default FirstMenu;
