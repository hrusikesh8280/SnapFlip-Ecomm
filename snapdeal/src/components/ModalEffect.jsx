import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as Routerlink } from "react-router-dom";

function ModalEffect({ image, description, price }) {
  const [count, setCount] = useState(1);

  const handleSub = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  const handleAdd = () => {
    setCount(count + 1);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w={"200px"}
        size={"lg"}
        py={"8"}
        background={"red.500"}
        _hover={{ bg: "red.500" }}
        onClick={onOpen}
      >
        QUICK BUY
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{description}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <center>
                <img width={"50%"} src={image} alt="qwerty" />
                <Text>Price-{price}</Text>
              </center>
            </Stack>
            <Box mt={"15px"} display="inline-flex">
              <Text fontSize="20px" color="olivedrab" mt={"5px"}>
                Quantity
              </Text>
              <Button>{count}</Button>
              <Button variant="ghost" onClick={() => handleSub(-1)}>
                -
              </Button>
              <Button variant="ghost" onClick={() => handleAdd(1)}>
                +
              </Button>
            </Box>
            <Text as="samp" fontSize="18px" ml={"220px"}>
              Total Price:{Math.floor(count * price)}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Routerlink to="/modelmsg">
              <Button
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "xl",
                }}
                color={"white"}
                background={"blue.400"}
              >
                Make Payment
              </Button>
            </Routerlink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalEffect;
