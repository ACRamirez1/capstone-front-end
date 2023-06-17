import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

const NavbarSub = () => {
  return (
    <Flex as="nav" alignItems="center" ml="15vw" mr="15vw" pb={"20"}>
      <Heading as="h1" fontSize={80} color={"teal"}>
        Fatherhood
      </Heading>
      <Spacer />
    </Flex>
  );
};

export default NavbarSub;
