// import {
//   Box,
//   chakra,
//   Flex,
//   SimpleGrid,
//   Stat,
//   StatLabel,
//   StatNumber,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { FaUsers, FaEye, FaShoppingCart } from "react-icons/fa";

// const StatsCardProps = {
//   title: "",
//   stat: "",
// };
// function StatsCard({ title, stat, icon }) {
//   //   const { title, stat } = StatsCardProps;
//   return (
//     <Stat
//       px={{ base: 4, md: 8 }}
//       py={"60px"}
//       //   shadow={"xl"}
//       border={"1px solid"}
//       borderColor={useColorModeValue("gray.300", "gray.400")}
//       //   rounded={"lg"}
//     >
//       <StatLabel fontWeight={"medium"} isTruncated>
//         {title}
//       </StatLabel>
//       <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
//         {stat}
//       </StatNumber>
//     </Stat>
//   );
// }

// export default function Home() {
//   return (
//     <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
//       <Flex columns={{ base: 1, md: 4 }}>
//         <StatsCard title={"We serve"} stat={"50,000 people"} icon={FaUsers} />
//         <StatsCard title={"In"} stat={"30 different countries"} icon={FaEye} />
//         <StatsCard
//           title={"Who speak"}
//           stat={"100 different languages"}
//           icon={FaShoppingCart}
//         />
//         <StatsCard
//           title={"Who speak"}
//           stat={"100 different languages"}
//           icon={FaShoppingCart}
//         />
//       </Flex>
//     </Box>
//   );
// }

import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { FaUsers, FaEye, FaShoppingCart } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

function StatisticsBox({ title, value, color, image }) {
  return (
    <Box
      bg={color}
      color="white"
      p={5}
      rounded="md"
      border="1px solid cyan"

      //   shadow="md"
    >
      <Stack align="center" spacing={3}>
        <Flex align="center" justify="center">
          <img width={"75px"} src={image} alt={title} />
        </Flex>
        {/* <Box as={icon} size="60px" color={"red"} mr={2} /> */}
        <Heading color={"#6c6666"} as="h2" size="md">
          {value}
        </Heading>
      </Stack>
      <Text
        textAlign="center"
        color={"#a4a3a3"}
        fontSize="xs"
        fontWeight="small"
      >
        {title}
      </Text>
    </Box>
  );
}
export default function BasicCard() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }}>
        <StatisticsBox
          title="Moving Your card details to a much more secured place"
          value={"100% SECURE PAYMENTS"}
          color="white"
          image="https://i.ibb.co/zryGXLQ/credit-card-1.png"
        />
        <StatisticsBox
          title="100% Payment Protection.Easy Return Policy "
          value={"TRUSTPAY"}
          color="white"
          image="https://i.ibb.co/yFvHkXc/credit-card.png"
        />
        <StatisticsBox
          title="Got a question? Look no further.Browse our FAQs or submit your query here."
          value={"Help Center"}
          color="white"
          image="https://i.ibb.co/CwZKcq8/customer-service-agent.png"
        />
        <StatisticsBox
          title="Download the app and get excitings app only offers at your fingertips"
          value={"Shop on the Go"}
          color="white"
          image="https://i.ibb.co/hKmZQrN/phone.png"
        />
      </SimpleGrid>
    </Box>
  );
}

{
  /* <Flex justify="center" w={"100px"}>
  <StatisticsBox title="Users" value={1000} color="blue.500" icon={FaUsers} />
  <StatisticsBox title="Views" value={5000} color="green.500" icon={FaEye} />
  <StatisticsBox
    title="Orders"
    value={200}
    color="red.500"
    icon={FaShoppingCart}
  />
</Flex>; */
}
