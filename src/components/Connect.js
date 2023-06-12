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
import GoogleMapReact from 'google-map-react';

const Connect = (props) => {
  return (
    <>
      

      <Card bg="rgb(225,234,236)" height="100vh" mt={20}>
        <HStack>
          <Box bgImage={mapbg} width="65%" h="600">
            <Table backgroundImage="url({mapbg})">
              <TableCaption>Meeting groups for Men in Lubbock</TableCaption>
              <Thead>
                <Tr>
                  <Th>Map Letter</Th>
                  <Th>Name of Event</Th>
                  <Th>Day(s) Meeting</Th>
                  <Th>Time</Th>
                  <Th>Address</Th>
                  <Th>Additional Details</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>A</Td>
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
                  <Td>B</Td>
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
                  <Td>C</Td>
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
                  <Td>D</Td>
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

          <Box h={600} w={'35%'} id={'map'}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPSAPIKEY }}
                defaultCenter={{ lat: 33.5779, lng: -101.8552 }}
                defaultZoom={11}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
            </GoogleMapReact>
          </Box>
        </HStack>
      </Card>
    </>
  );
};

function handleApiLoaded(map, maps) {
  const markers = [
    { letter: 'A', lat: 33.4644664, lng: -101.904398 },
    { letter: 'B', lat: 33.5009594, lng: -102.0103375 },
    { letter: 'C', lat: 33.5750663, lng: -101.8177721 },
    { letter: 'D', lat: 33.5367906, lng: -101.8898311 }
  ];

    markers.forEach((marker) => {
      const mapMarker = new maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        label: marker.letter,
      });

      mapMarker.setMap(map);
    });
}

export default Connect;