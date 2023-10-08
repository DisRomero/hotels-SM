import { Text, Box, Checkbox, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const InfoRooms = ({ roomId, description,baseRate, taxes,type, roomAvailable,section, guesCapacity, ...rest }) => {
    const navigate = useNavigate();
    
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

                <Checkbox isChecked={roomAvailable}>La habitacion esta activa?</Checkbox>

                <FormLabel>Ubicacion</FormLabel>
                <Input  isReadOnly={true} value={section}></Input>

                <FormLabel>Capacidad</FormLabel>
                <Input  isReadOnly={true} value={guesCapacity}></Input>
            </Box>
        </FormControl>
        </>
    );
};

export default InfoRooms;
