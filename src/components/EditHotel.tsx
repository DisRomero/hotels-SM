//@vendors
import { useContext, useState } from "react";
import { Grid, GridItem, Text, Button, Center, Box, FormControl, FormLabel, Input, Checkbox} from "@chakra-ui/react";

//@components
import GridWrapper from "./GridWrapper";
import InfoRooms from "./InfoRooms";

//@db
import { getHotelsById, getRoomsByHotelId, getRooms } from "../api/db";
import { DbContext } from "../AuthContext";

const EditHotel = () => {
    const { db } = useContext(DbContext);
    const hoteIDLS = localStorage.getItem("hotelInfo").replace(/['"]+/g, '');

    const [hotelIdOfLS, setHotelIdOfLS] =  useState(() => getHotelsById(db, hoteIDLS));
    
    const rooms = getRoomsByHotelId(db, hotelIdOfLS.hotelId);
    const [hotelAvailable, setHotelAvailable] =  useState(hotelIdOfLS.hotelAvailable);
    

    const allRooms = getRooms(db);
    const getLastRoomsId = () => parseInt(allRooms[allRooms.length - 1].roomId);
    
    const handleCreateRoom = () => {
        const newHotel = {
            hotelId: getLastRoomsId() + 1,
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
            <Grid m={6}>
                <GridItem>
                    <Center>
                        <Text>Editar hotel</Text>
                    </Center>
                </GridItem>
                <FormControl isRequired m={2}>
                    <GridItem >
                            <Box p={5} shadow="md" borderWidth="1px">
                                
                                <FormLabel>Identificador del hotel</FormLabel>
                                <Input isReadOnly={true} value={hotelIdOfLS.hotelId}></Input>

                                <FormLabel>Nombre del hotel</FormLabel>
                                <Input isReadOnly={true} value={hotelIdOfLS.hotelName}></Input>
                                
                                <Checkbox isChecked={hotelAvailable}
                                onChange={() => {
                                    setHotelAvailable(hotelAvailable => !hotelAvailable);
                                    }}>
                                    El hotel esta activo?
                                </Checkbox>

                                <FormLabel>Ciudad del hotel</FormLabel>
                                <Input isReadOnly={true} value={hotelIdOfLS.city}></Input>
                                
                            </Box>        
                            
                    </GridItem>
                    <GridItem>
                        {rooms ? rooms.map((room, i: number) => 
                        (
                            <InfoRooms
                            key={i}
                            roomId={room.roomId}
                            description={room.description}
                            baseRate={room.baseRate}
                            taxes={room.taxes}
                            type={room.type}
                            roomAvailable={room.roomAvailable}
                            section={room.section}
                            guesCapacity={room.guesCapacity}
                            hotelId={room.hotelId}
                            />
                        )) : null }
                    </GridItem>
                    <Button  
                    onClick={() => {}}
                    >Agregar habitacion</Button>
                </FormControl>


                <Button 
                mt={4} 
                colorScheme="blue"
                type="submit"
                onClick={() => {}}>
                    Guardar hotel
                </Button>
            </Grid>
        </GridWrapper>
    );
};

export default EditHotel;
