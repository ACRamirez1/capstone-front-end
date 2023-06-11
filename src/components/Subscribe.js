import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <>
      <Navbar />

      <Card bg="rgb(225,234,236)" height="60vh" mt='10' >
        <VStack
          justifyContent='center'
          height="100%"
          pl="25vw"
          pr="25vw"
        >
          <Heading as="h1"  pb="5" justifyContent='left'>
            Subscribe To Our Newsletter
          </Heading>
          <Text  fontSize={20} pb='5' >
            A weekly update will be sent out as a reminder of the new articles
            published to the website, so subscribe to ensure you don't miss out
            on any new content. Join a community of Men who are looking to
            learn, contribute, and grow together with other Men.
          </Text>
          <Flex>
            <FormControl >
              {/* <FormLabel>Email address</FormLabel> */}
              <Input placeholder="Email Address" bg="white" type="email" borderRightRadius='0' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Button
              
              textColor="White"
              
              borderRadius="4px"
              borderLeftRadius='0'
              h="100%"
              colorScheme="teal"
              variant="solid"
            >
              Subscribe
            </Button>
          </Flex>
        </VStack>
      </Card>
    </>
  );
};

export default Subscribe;
