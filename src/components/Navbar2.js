import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  const fatherClick = () => {
    navigate("/roleofafather");
  };

  const subClick = () => {
    navigate("/subscribe");
  };

  const connectClick = () => {
    navigate("/connect");
  };

  return (
    <VStack>
      <HStack spacing="60px">
        <Box
          as="button"
          textColor="teal"
          p="8px 16px"
          fontSize="40px"
          onClick={fatherClick}
        >
          Role of a Father?
        </Box>
        <Box
          as="button"
          textColor="teal"
          p="8px 16px"
          fontSize="40px"
          onClick={subClick}
        >
          Subscribe
        </Box>
        <Box
          as="button"
          textColor="teal"
          p="8px 16px"
          fontSize="40px"
          onClick={connectClick}
        >
          Connect
        </Box>
      </HStack>
    </VStack>
  );
};

export default Navbar2;
