import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading as="h1" textAlign="center" flexGrow={1}>
        <ChakraLink as={RouterLink} to="/articles">
          Fatherhood
        </ChakraLink>
      </Heading>

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
    </Flex>
  );
};

export default Navbar;
