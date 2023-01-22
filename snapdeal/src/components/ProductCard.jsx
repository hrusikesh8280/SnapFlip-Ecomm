import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Card,
  Flex,
} from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";

export default function ProductCard({ id, image, price, name, stars }) {
  return (
    <Flex
      spacing={4}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <Image style={{ height: 220, width: 340 }} src={image} />
      </Box>
      <Box>
        <Text fontWeight="semibold" marginTop={2}>
          {name}
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold" marginTop={2}>
          Price: {price}
        </Text>
      </Box>
      <Box mt={"10px"}>
        <RouterLink to={`/products/${id}`}>
          <Button
            background={"cyan.400"}
            width={"150px"}
            _hover={{
              transform: "scale(1.4)",
              color: "black",
              background: "darkturquoise",
            }}
          >
            View
          </Button>
        </RouterLink>
      </Box>
    </Flex>
  );
}
