import { useContext } from "react";
import { Grid, GridItem, Text, Center, Box, Link} from "@chakra-ui/react";
import GridWrapper from "./GridWrapper";
import { getBookingByUserEmail } from "../api/db";

import { DbContext } from "../AuthContext";
import InfoBooking from "./InfoBooking";

const Booking = () => {
    const { db } = useContext(DbContext);
    const UserIDLSParse = JSON.parse(localStorage.getItem("userSession"));
    const userEmail = getBookingByUserEmail(db, UserIDLSParse.userEmail )
    
    console.log('userEmail', userEmail)

// const [hotelIdOfLS, setHotelIdOfLS] =  useState(() => getUserFromLS(db, hoteIDLS));
    return (
        <GridWrapper>
            <Grid>
                <GridItem>
                    <Center>
                        <Text>Lista de hoteles</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Box m={5} p={5} shadow="md" borderWidth="1px">
                            <Text mt={4}>
                                {userEmail.email}
                                <Link color="teal.500" href="#">
                                    Ver más para hacer reserva..
                                </Link>
                            </Text>
                    </Box>
                </GridItem>
            </Grid>
        </GridWrapper>
    );
};
export default Booking;
