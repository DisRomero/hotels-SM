import { useContext, useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { getHotels } from "../api/db";
import { DbContext } from "../AuthContext";

import GridWrapper from "./GridWrapper";
import { useNavigate } from "react-router-dom";

const CreateHotel = () => {
    const { db, setDb } = useContext(DbContext);
    const navigate = useNavigate();
    const hotels = getHotels(db);
    const [hotelName, setHotelName] = useState("");
    const [cityName, setCityName] = useState("");
    const getLastHotelId = () => parseInt(hotels[hotels.length - 1].hotelId);

    const handleCreateHotel = () => {
        const newHotel = {
            hotelId: getLastHotelId() + 1,
            hotelName: hotelName,
            hotelAvailable: false,
            city: cityName,
            rooms: [],
        };
        const newDb = structuredClone(db);
        newDb.hotels.push(newHotel);
        setDb(newDb);
        navigate("/admin");
    };
    return (
        <GridWrapper>
            <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    placeholder="Hilton Bogota"
                />
                <FormLabel>Ciudad</FormLabel>
                <Input
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Bogota"
                />

                <Button
                    colorScheme="blue"
                    type="submit"
                    onClick={handleCreateHotel}
                >
                    Crear hotel
                </Button>
            </FormControl>
        </GridWrapper>
    );
};

export default CreateHotel;
