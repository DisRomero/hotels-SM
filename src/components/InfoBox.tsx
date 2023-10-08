import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Text, Box, Heading, Link, IconButton } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

import { DbContext } from "../AuthContext";
import { storeHotelIDInLS } from "../api/userAuth";

const InfoBox = ({ id, title, rooms, ...rest }) => {
    const navigate = useNavigate();
    const Auth = useContext(DbContext);

    const handleSubmit = (hotelId) => {
        return storeHotelIDInLS(hotelId);
    }
    
    const handleEditHotel = () => {
        return navigate("/edit-hotel");
    };

    return (
        <Box p={5} shadow="md" borderWidth="1px" {...rest}>
            <Heading fontSize="xl">
                {title}

                <IconButton
                    isRound={true}
                    variant='outline'
                    colorScheme='blue'
                    icon={<EditIcon />}
                    m={2}
                    onClick={() => {
                        handleSubmit(id);
                        handleEditHotel();
                    } } aria-label={""}/>
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

export default InfoBox;
