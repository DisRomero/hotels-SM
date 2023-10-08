import { useContext } from "react";
import { Grid, GridItem, Text, Button, Center } from "@chakra-ui/react";
import GridWrapper from "./GridWrapper";
import InfoBox from "./InfoBox";
import { getHotels, getRoomsByHotelId } from "../api/db";
import { useNavigate } from "react-router-dom";
import { DbContext } from "../AuthContext";

const HotelAdmin = () => {
    const { db } = useContext(DbContext);
    const hotels = getHotels(db);
    const navigate = useNavigate();

    const handleCreateHotel = () => {
        return navigate("/create-hotel");
    };

    return (
        <GridWrapper>
            <Grid>
                <GridItem>
                    <Center>
                        <Text>Admin view</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Button
                        colorScheme="blue"
                        type="submit"
                        onClick={handleCreateHotel}
                    >
                        Crear hotel
                    </Button>
                </GridItem>
                <GridItem>
                    {hotels.map((hotel, i: number) => (
                        <InfoBox
                            key={i}
                            title={hotel.hotelName}
                            rooms={getRoomsByHotelId(db, hotel.hotelId)}
                        />
                    ))}
                </GridItem>
            </Grid>
        </GridWrapper>
    );
};

export default HotelAdmin;
