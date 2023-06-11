import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import me2 from "../Cap-images/me2.jpg";
import vd005 from "../Cap-images/jeshoots-com-VdOO4_HFTWM-unsplash1.jpg";

const WhatIsAFather = () => {
  return (
    <>
      <Navbar />
      <VStack pt={20} ml="15vw" mr="15vw">
        <Card p={5} bg="rgb(225,234,236)">
          <Card align="center">
            <CardBody>
              <HStack align={"self-start"}>
                <Flex justifyContent={"center"} flex={1}>
                  <Image
                    src={me2}
                    alt="Picture of man holding his daughter."
                    borderRadius="lg"
                  />
                </Flex>
                <Box
                  flexDirection={"column"}
                  spacing="3"
                  flex={1.5}
                  justifyContent="flex-start"
                  ml={5}
                  mr={5}
                >
                  <Heading as="h1" mt={0} pb={5}>
                    Role of a Father
                  </Heading>
                  <Text fontSize={20}>
                  The role of a father is multifaceted and can vary based on cultural, societal, and individual factors. Traditionally, fathers have been seen as providers and protectors within the family unit, but the understanding of fatherhood has evolved over time. It's important to note that the role of a father can be fulfilled in various ways, and each father's style and approach may differ. Ultimately, the role of a father is to be actively involved in their children's lives, providing love, support, guidance, and being a positive presence as they grow and develop into well-rounded individuals.
                  </Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>

          <Heading as="h1" pt={10} pb={20}>
            The role of a father is multifaceted and can vary based on cultural,
            societal, and individual factors. Traditionally, fathers have been
            seen as providers and protectors within the family unit, but the
            understanding of fatherhood has evolved over time. Here are some key
            aspects that often define the role of a father:{" "}
          </Heading>

          <Grid templateColumns="repeat(2, 1fr)" gap={9}>
            <GridItem>
              <Box>
                <List spacing={5}>
                  <li >
                    1. Nurturing and emotional support: Fathers play a crucial
                    role in providing emotional support and fostering a sense of
                    security for their children. They offer love, affection, and
                    guidance, helping their children develop healthy emotional
                    well-being.
                  </li>
                  <li>
                    2. Mentor and role model: Fathers serve as mentors and role
                    models, shaping their children's behaviors, values, and
                    beliefs. They demonstrate important life skills, such as
                    problem-solving, decision-making, and resilience, through
                    their own actions and behaviors.
                  </li>
                  <li>
                  3. Provision and protection: Fathers often take on the
                    responsibility of providing for their families financially.
                    They work to meet the family's needs, ensuring a stable and
                    secure environment. Fathers also play a role in protecting
                    their children, both physically and emotionally, and
                    creating a sense of safety.
                  </li>
                  <li>
                    4. Parental partnership: Modern fathers are
                    increasingly involved in the day-to-day care of their
                    children. They actively participate in parenting tasks like
                    feeding, bathing, changing diapers, and helping with
                    homework. Active involvement strengthens the bond between
                    fathers and their children and contributes to their overall
                    development.
                  </li>
                  <li>
                    5. Teaching and education: Fathers have a significant role
                    in their children's education and intellectual development.
                    They engage in activities that promote learning, encourage
                    curiosity, and support their children's educational goals.
                    Fathers can also instill important values like discipline,
                    responsibility, and respect for others.
                  </li>
                </List>
              </Box>
            </GridItem>

            <GridItem>
              <Box>
                <List spacing={5}>
                  <li>
                    1. Building a healthy relationship with the partner: Fathers
                    contribute to a healthy family dynamic by nurturing their
                    relationship with the child's mother or their partner. They
                    collaborate in parenting decisions, share household
                    responsibilities, and provide emotional support to each
                    other, creating a stable and nurturing environment for the
                    children.
                  </li>
                  <li>
                    2. Encouraging independence and self-confidence: Fathers
                    encourage their children to explore their interests, take
                    risks, and develop independence. They provide guidance and
                    support while allowing their children to make their own
                    decisions, fostering self-confidence and self-reliance. It's
                    important to note that the role of a father can vary
                    significantly based on individual circumstances, cultural
                    backgrounds, and family structures. Modern understandings of
                    fatherhood emphasize involvement, emotional support, and
                    shared responsibilities, allowing fathers to play an active
                    and meaningful role in their children's lives.
                  </li>
                  <li>
                    3. Teaching and education: Fathers play a part in their
                    children's education and intellectual development. They
                    encourage learning, support academic pursuits, and offer
                    guidance in making important life decisions.
                  </li>
                  <li>
                    4. Disciplinarian and setting boundaries: Fathers contribute
                    to establishing discipline and setting boundaries for their
                    children. They teach the importance of responsibility,
                    accountability, and appropriate behavior, helping children
                    develop self-control and respect for others.
                  </li>
                </List>
              </Box>
            </GridItem>

          </Grid>

          <CardFooter>
            <Card>
              <Image
                src={vd005}
                alt="5 Roles a Father you must Learn to do Well"
                borderRadius="lg"
              />
            </Card>
          </CardFooter>
        </Card>
      </VStack>
    </>
  );
};

export default WhatIsAFather;
