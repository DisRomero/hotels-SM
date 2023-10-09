//@vendors
import { Text, Box} from "@chakra-ui/react";

const InfoBooking = ({ email, starDate, endDate, userType, ...rest }) => {
    return (
        <Box p={5} shadow="md" borderWidth="1px" {...rest} >
            <Text mb='8px' >Correo electronico: {email}</Text>
            <Text mb='8px' >Tiempo de reserva:</Text>
            <Text mb='8px' >Inicio: {starDate}</Text>
            <Text mb='8px' >Fin: {endDate}</Text>
            <Text mb='8px' >Nombre del usuario: {userType}</Text>
        </Box>
    );
};

export default InfoBooking;
