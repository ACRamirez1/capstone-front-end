import { Box, Flex, Heading, Link as ChakraLink, Spacer, HStack } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {

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
    <Flex as='nav'  alignItems="center" ml="15vw" mr="15vw">
      <Heading as="h1" fontSize={80} >
        <ChakraLink as={RouterLink} to="/articles" color={'teal'}>
          Fatherhood
        </ChakraLink>
      </Heading>
      <Spacer />


      <HStack spacing="30px">
        <Box
          as="button"
          textColor="teal"
          p="8px 16px"
          fontSize="20px"
          onClick={fatherClick}
        >
          Role of a Father?
        </Box>
        <Box
          as="button"
          textColor="teal"
          p="8px 16px"
          fontSize="20px"
          onClick={subClick}
        >
          Subscribe
        </Box>
        <Box
          as="button"
          textColor="teal"
          p="8px 16px"
          fontSize="20px"
          onClick={connectClick}
        >
          Connect
        </Box>
      


      <Box
        as="button"
        textColor="teal"
        border="1px"
        borderRadius="4px"
        p={1}
        maxW="md"
        justifyItems="end"
      >
        Logout
      </Box>
      </HStack>
    </Flex>
  );
};

export default Navbar;
