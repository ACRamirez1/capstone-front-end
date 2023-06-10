import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "./logo.jpg";
import { Box, Flex, Image, Text, List, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Quotes = (props) => {
  console.log("is running");
  const [quotes, setQutoes] = useState([]);
  const [author, setAuthor] = useState([]);
  const [showElement, setShowElement] = React.useState(false);
  const navigate = useNavigate();
  const timeout = 0; //10000

  useEffect(() => {
    axios
      .get("https://capstone-ashen-zeta.vercel.app/quotes", {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((response) => {
        // console.log(response)
        setQutoes(response.data);
        setAuthor(response.data);
      });
  }, [props.token]);

  const handleClick = () => {
    navigate("/articles");
  };

  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, timeout);
  }, []);

  return (
    <div>
      {/* <a href="" */}
      <Image
        src={logo}
        alt="Background Image"
        style={{
          position: "absolute",
          width: "100vw",
          zIndex: -1,
          overflow: "hidden",
        }}
      />

      <Flex justify="center" alignItems="center" p="40">
        <Box p={5} justify="center" background="rgba(0,0,0,.5)" rounded="md">
          <Box
            as="article"
            maxW="2xl"
            p="5"
            textAlign="center"
            textColor="white"
          >
            <Box border="1px" p="10" borderRadius="md">
              <List>
                {!quotes.length ? (
                  <p>Loading quotes...</p>
                ) : (
                  quotes.map(({ id, quote, author }) => (
                    <li key={id}>
                      <Heading as="h1" mb="5">
                        {quote}
                      </Heading>
                      <Text as="i" fontSize="2xl">
                        -{author}
                      </Text>
                    </li>
                  ))
                )}
              </List>
            </Box>
            <Flex justify="center" alignItems="center" mt="50px">
              {showElement ? (
                <Box
                  as="button"
                  borderRadius="md"
                  bg="red.900"
                  color="white"
                  px={10}
                  fontSize="40px"
                  opacity={showElement ? 1 : 0}
                  onClick={handleClick}
                >
                  Subscribe to Newsletter
                </Box>
              ) : (
                <div></div>
              )}{" "}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Quotes;
