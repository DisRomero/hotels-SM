//@vendors
import { useState, useContext } from "react";

import { Text, Box, Checkbox, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { getRooms } from "../api/db";
import { DbContext } from "../AuthContext";

const InfoRooms = ({ roomId, description,baseRate, taxes,type, roomAvailable,section, guesCapacity, hotelId, ...rest }) => {
    
    const [isRoomAvailable, setRoomAvailable] =  useState(roomAvailable);
    const { db, setDb } = useContext(DbContext);
    const rooms = getRooms(db);
    const getLastRoomsId = () => parseInt(rooms[rooms.length - 1].roomId);
    
    const defaultState = {
        roomId: getLastRoomsId() + 1,
        description: "",
        baseRate: "",
        taxes: "",
        type: "",
        roomAvailable: "",
        section: "",
        guesCapacity: "",
        hotelId: hotelId
      };

      const [rows, setRows] = useState([defaultState]);
    
    const handleOnRemove = index => {
        const copyRows = [...rows];
        copyRows.splice(index, 1);
        setRows(copyRows);
      };
    
    return (
        <>
        
        <FormControl isRequired m={2}>
            <Box p={5} shadow="md" borderWidth="1px" {...rest}>
                
                <FormLabel>Identificador de la habitacion</FormLabel>
                <Text>{roomId}</Text>

                <FormLabel>Descripcion</FormLabel>
                <Input  isReadOnly={true} value={description}></Input>

                <FormLabel>Costo base</FormLabel>
                <Input  isReadOnly={true} value={baseRate}></Input>

                <FormLabel>Impuestos</FormLabel>
                <Input  isReadOnly={true} value={taxes}></Input>

                <FormLabel>Tipo de habitacion</FormLabel>
                <Input  isReadOnly={true} value={type}></Input>

                <Checkbox isChecked={isRoomAvailable}
               onChange={() => {
                console.log('test roomAvailable', roomAvailable)
                setRoomAvailable(isRoomAvailable => !isRoomAvailable);
                }}>La habitacion esta activa?</Checkbox>

                <FormLabel>Ubicacion</FormLabel>
                <Input  isReadOnly={true} value={section}></Input>

                <FormLabel>Capacidad</FormLabel>
                <Input  isReadOnly={true} value={guesCapacity}></Input>

                <Button onClick={() => handleOnRemove(roomId)}>Eliminar</Button>
            </Box>
        </FormControl>
        </>
    );
};

export default InfoRooms;

