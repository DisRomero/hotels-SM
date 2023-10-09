import { useContext } from "react";
import { Grid, GridItem, Text, Button, Center } from "@chakra-ui/react";
import GridWrapper from "./GridWrapper";
import InfoHotels from "./InfoHotels";
import { getHotels, getRoomsByHotelId } from "../api/db";

import { DbContext } from "../AuthContext";

const HotelUser = () => {
    const { db } = useContext(DbContext);
    const hotels = getHotels(db);
    
    return (
        <GridWrapper>
            <Grid>
                <GridItem>
                    <Center>
                        <Text>Lista de hoteles</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    {hotels.map((hotel, i: number) => (
                        <InfoHotels
                        key={i}
                        id={hotel.hotelId}
                        title={hotel.hotelName}
                        rooms={getRoomsByHotelId(db, hotel.hotelId)}
                        />
                    ))}
                </GridItem>
            </Grid>
        </GridWrapper>
    );
};

export default HotelUser;
