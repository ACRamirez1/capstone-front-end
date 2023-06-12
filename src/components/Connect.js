import Navbar from "./Navbar";
import {
  Box,
  Card,
  HStack,
  Link,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import mapbg from "../Cap-images/art_deco_blue_background.jpg";

const Connect = (props) => {
  return (
    <>
      <Navbar />

      <Card bg="rgb(225,234,236)" height="100vh" mt={20}>
        <HStack>
          <Box bgImage={mapbg} width="65%" h="600">
            <Table backgroundImage="url({mapbg})">
              <TableCaption>Meeting groups for Men in Lubbock</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name of Event</Th>
                  <Th>Day(s) Meeting</Th>
                  <Th>Time</Th>
                  <Th>Address</Th>
                  <Th>Additional Details</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>Ultimate Frisbee</Td>
                  <Td>Tuesday</Td>
                  <Td>5:30 am - 6:30 am</Td>
                  <Th>14205 Quaker Ave, Lubbock, TX 79423</Th>
                  <Td>
                    We will be meeting at Trinity Christian Athletic Complex.
                    Come hang out and play a pick up game of ultimate frisbee!
                    All Abilities are welcome! <br></br> For any questions or
                    cancellations,{" "}
                    <Link color="teal.500" href="#">
                      https://www.facebook.com/TheForgeHQTX
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>BBQ Friday</Td>
                  <Td>Friday</Td>
                  <Td>11:30 am - close</Td>
                  <Th>217 US-62, Wolfforth, TX 79382</Th>
                  <Td>
                    Evie Mae's BBQ Wolfforth. No agenda, just time to hang out
                    with good dudes over good food and celebrate the week.
                    <br></br> For any questions or cancellations,{" "}
                    <Link color="teal.500" href="#">
                      https://www.facebook.com/TheForgeHQTX
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Sunday Walkabout</Td>
                  <Td>Sunday</Td>
                  <Td>6:30 am - 7:30 am</Td>
                  <Th>Canyon Lake Drive, Lubbock, TX 79403</Th>
                  <Td>
                    Dunbar Lake. 3 Mile walk about. <br></br> For any questions
                    or cancellations,{" "}
                    <Link color="teal.500" href="#">
                      https://www.facebook.com/TheForgeHQTX
                    </Link>{" "}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Bible Study at The Hub</Td>
                  <Td>Thursday</Td>
                  <Td>6:00 am - 7:00 am</Td>
                  <Th>6303 Indiana Avenue</Th>
                  <Td>
                    Park in the back, and enter through black door. Come and
                    join with other men as we work through the scriptures!{" "}
                    <br></br> For any questions or cancellations,{" "}
                    <Link color="teal.500" href="#">
                      https://www.facebook.com/TheForgeHQTX
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <iframe
            height="600"
            width="35%"
            title="addedNewListing"
            // overflow="hidden"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLEMAPSAPIKEY}&q=Lubbock+TX&zoom=11`}
          ></iframe>
        </HStack>
      </Card>
    </>
  );
};

export default Connect;
