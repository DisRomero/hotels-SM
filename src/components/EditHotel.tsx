//@vendors
import { useContext, useState } from "react";

import { Grid, GridItem, Text, Button, Center, Box, FormControl, FormLabel, Input, Checkbox} from "@chakra-ui/react";
import GridWrapper from "./GridWrapper";
import { getHotelsById, getRoomsByHotelId } from "../api/db";

import { DbContext } from "../AuthContext";
import InfoRooms from "./InfoRooms";

const EditHotel = () => {
    const { db } = useContext(DbContext);
    const hoteIDLS = localStorage.getItem("hotelInfo").replace(/['"]+/g, '');

    const [hotelIdOfLS, setHotelIdOfLS] =  useState(() => getHotelsById(db, hoteIDLS));
    
    const rooms = getRoomsByHotelId(db, hotelIdOfLS.hotelId);
    const [hotelAvailable, setHotelAvailable] =  useState(hotelIdOfLS.hotelAvailable);
    
  

    return (
        <GridWrapper>
            <Grid m={6}>
                <GridItem>
                    <Center>
                        <Text>Editar hotel</Text>
                    </Center>
                </GridItem>
                <FormControl isRequired m={2}>
                    <GridItem>
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
                            />
                        )) : null }
                    </GridItem>
                </FormControl>


                <Button
                                mt={4}
                                colorScheme="blue"
                                type="submit"
                                onClick={() => {alert("You clicked on the button");}}
                            >
                                Guardar hotel
                            </Button>
            </Grid>
        </GridWrapper>
    );
};

export default EditHotel;
