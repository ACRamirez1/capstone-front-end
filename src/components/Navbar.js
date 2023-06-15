import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React from "react";
import cookie from "cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const cookies = cookie.parse(document.cookie);

  const deleteCookie = () => {
    if (cookies["loggedin"]) {
      document.cookie = "loggedin=; max-age=0";
      navigate("/");
    } else {
      navigate("/");
    }
  };

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
    <Flex as="nav" alignItems="center" ml="15vw" mr="15vw">
      {cookies["loggedin"] ? (
        <>
          <Heading as="h1" fontSize={80} color="teal">
            <ChakraLink as={RouterLink} to="/articles" color="teal">
              Fatherhood
            </ChakraLink>
          </Heading>
        </>
      ) : (
        <Heading as="h1" fontSize={80} color="teal">
          Fatherhood
        </Heading>
      )}

      <Spacer />

      <HStack spacing="30px">
        {cookies["loggedin"] ? (
          <Box
            as="button"
            textColor="teal"
            p="8px 16px"
            fontSize="20px"
            onClick={fatherClick}
          >
            Role of a Father?
          </Box>
        ) : null}

        {cookies["loggedin"] ? (
          <Box
            as="button"
            textColor="teal"
            p="8px 16px"
            fontSize="20px"
            onClick={subClick}
          >
            Subscribe
          </Box>
        ) : null}

        {cookies["loggedin"] ? (
          <Box
            as="button"
            textColor="teal"
            p="8px 16px"
            fontSize="20px"
            onClick={connectClick}
          >
            Connect
          </Box>
        ) : null}

        {cookies["loggedin"] ? (
          <Box
            as="button"
            textColor="teal"
            border="1px"
            borderRadius="4px"
            p={1}
            maxW="md"
            justifyItems="end"
            onClick={() => {
              deleteCookie();
            }}
          >
            Logout
          </Box>
        ) : (
          <Box
            as="button"
            textColor="teal"
            border="1px"
            borderRadius="4px"
            p={1}
            maxW="md"
            justifyItems="end"
          >
            <ChakraLink as={RouterLink} to="/login" color={"teal"}>
              Login
            </ChakraLink>
          </Box>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
