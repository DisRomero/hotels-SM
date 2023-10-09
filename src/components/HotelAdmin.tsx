//@vendors
import { useContext } from "react";
import { Grid, GridItem, Text, Button, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

//@components
import GridWrapper from "./GridWrapper";
import InfoBox from "./InfoBox";

//@db
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
            <Grid m={2}>
                <GridItem>
                    <Center>
                        <Text>Lista de hoteles</Text>
                        </Center>
                </GridItem>
                <GridItem >
                
                    <Button m={2}
                        colorScheme="blue"
                        type="submit"
                        onClick={handleCreateHotel}
                        rightIcon={<AddIcon/>} 
                    >
                        Crear hotel
                    </Button>

                </GridItem>
                <GridItem>
                    {hotels.map((hotel, i: number) => (
                        <InfoBox
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

export default HotelAdmin;
