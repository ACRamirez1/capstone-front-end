import {
  Box,
  Flex,
  Heading,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const NavbarSub = () => {

  return (
    <Flex as="nav" alignItems="center" ml="15vw" mr="15vw" pb={'20'}>
      <Heading as="h1" fontSize={80} color={"teal"}>
        Fatherhood
      </Heading>
      <Spacer />

      <HStack spacing="30px">
        <Box
          as="button"
          textColor="teal"
          border="1px"
          borderRadius="4px"
          p={1}
          maxW="md"
          justifyItems="end"
          fontSize={'20'}
        >
          Login
        </Box>
      </HStack>
    </Flex>
  );
};

export default NavbarSub;
