import { ReactNode } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  Link,
  Icon,
  Text,
  Spacer,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("red.700", "red.600")} px={14} h={"30px"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <Box>
              <Text
                as="sub"
                marginTop={"4px"}
                //   css={{ cursor: "pointer" }}
                fontSize="xs"
                color={useColorModeValue("red.100", "cyan.50")}
              >
                Brand Waali Quality, Bazaar Waali Deal!
              </Text>
            </Box>
          </Flex>
          <Flex gap={4}>
            <Box>
              <Text
                as="sub"
                marginTop={"4px"}
                css={{ cursor: "pointer" }}
                fontSize="xs"
                color={useColorModeValue("red.100", "cyan.50")}
              >
                Impact@Snapdeal
              </Text>
            </Box>
            <Box>
              <Text
                as="sub"
                marginTop={"4px"}
                css={{ cursor: "pointer" }}
                fontSize="xs"
                color={useColorModeValue("red.100", "cyan.50")}
              >
                Gift Cards
              </Text>
            </Box>
            <Box>
              <Text
                as="sub"
                marginTop={"4px"}
                css={{ cursor: "pointer" }}
                fontSize="xs"
                color={useColorModeValue("red.100", "cyan.50")}
              >
                Help Center
              </Text>
            </Box>
            <Box>
              <Text
                as="sub"
                marginTop={"4px"}
                css={{ cursor: "pointer" }}
                fontSize="xs"
                color={useColorModeValue("red.100", "cyan.50")}
              >
                Sell on Snapdeal
              </Text>
            </Box>
            <Box>
              <Text
                col
                as="sub"
                marginTop={"4px"}
                css={{ cursor: "pointer" }}
                fontSize="xs"
                color={useColorModeValue("red.100", "cyan.50")}
              >
                Download App
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box
        bg={useColorModeValue("red.500", "red.400")}
        paddingTop={"7px"}
        px={1}
        h={"70px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <Box>
            <img
              src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
              alt="team"
            />
          </Box>
          <Stack direction={""} spacing={2}>
            <Box w={"500px"} spacing={2}>
              <Input
                placeholder="Search products & brands"
                style={{ background: "white" }}
              />
            </Box>
            <Button
              leftIcon={<SearchIcon />}
              background={"black"}
              width={"150px"}
              h={10}
              colorScheme="blue"
            >
              Search
            </Button>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                color={"white"}
                background={"none"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <Flex alignItems={"center"} justifyContent={"space-around"}>
                  {/* <Text css={{ cursor: "pointer" }} px={2} color={"white"}>
                    Sign in
                  </Text> */}
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Flex alignItems="center">
                      <Box
                        _hover={{ textDecoration: "none" }}
                        fontSize={"16px"}
                        fontWeight={"300"}
                        color={"white"}
                      >
                        Sign in
                      </Box>

                      <Box
                        marginLeft={2}
                        as={FaRegUser}
                        color="AntiqueWhite"
                        size={"22"}
                      />
                    </Flex>
                  </MenuButton>
                </Flex>
                <MenuList background={"black"} alignItems={"center"}>
                  <br />
                  <MenuItem
                    _hover={{ bg: "red.500" }}
                    background={"black"}
                    color={"white"}
                  >
                    <FaRegUser />
                    <Text marginLeft={"10px"}>Your Account</Text>
                  </MenuItem>
                  <MenuItem
                    spacing={4}
                    _hover={{ bg: "red.500" }}
                    background={"black"}
                    color={"white"}
                  >
                    <FaDropbox />
                    <Text marginLeft={"10px"}> Your Order</Text>
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "red.500" }}
                    background={"black"}
                    color={"white"}
                  >
                    <FiHeart />
                    <Text marginLeft={"10px"}> Shortlist</Text>
                  </MenuItem>
                  <MenuDivider />
                  <Center>
                    <Text color={"white"} fontSize="xs">
                      If you are a new user
                    </Text>
                  </Center>
                  <Center>
                    <Button
                      _hover={{ bg: "red.500" }}
                      background={"none"}
                      color={"white"}
                    >
                      Register
                    </Button>
                  </Center>
                  <Center>
                    <Button
                      _hover="none"
                      color={"white"}
                      width={"150px"}
                      background={"red.600"}
                    >
                      Login
                    </Button>
                  </Center>
                </MenuList>
              </Menu>
              <Flex marginLeft={"20px"}>
                <Button _hover="none" color={"white"} background={"none"}>
                  <Box fontSize={"18px"} fontWeight={"400"}>
                    Cart
                  </Box>
                  <Box fontWeight={"300"} as={FiShoppingCart} size={"22"} />
                </Button>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
