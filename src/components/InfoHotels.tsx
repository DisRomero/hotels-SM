//@vendors
import { Text, Box, Heading, Link } from "@chakra-ui/react";


const InfoHotels = ({ id, title, rooms, ...rest }) => {

    return (
        <Box m={5} p={5} shadow="md" borderWidth="1px" {...rest}>
            <Heading fontSize="xl">
                {title}
            </Heading>
            {rooms.map((room, i: number) => (
                <Text key={i} mt={4}>
                    {room.description}
                    <Link color="teal.500" href="#">
                        Ver más para hacer reserva..
                    </Link>
                </Text>
            ))}
        </Box>
    );
};

export default InfoHotels;
