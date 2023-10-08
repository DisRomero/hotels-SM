import { Text, Box, Heading, Link } from "@chakra-ui/react";

const InfoBox = ({ title, rooms, ...rest }) => {
    return (
        <Box p={5} shadow="md" borderWidth="1px" {...rest}>
            <Heading fontSize="xl">{title}</Heading>

            {rooms.map((room, i: number) => (
                <Text key={i} mt={4}>
                    {room.description}
                    <Link color="teal.500" href="#">
                        Ver más..
                    </Link>
                </Text>
            ))}
        </Box>
    );
};

export default InfoBox;
