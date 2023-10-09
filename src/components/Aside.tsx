//@vendors
import { VStack, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
    const navigate = useNavigate();

    const handleBooking = () => {
        return navigate("/booking");
    };

    const { pathname } = useLocation();

    return (
        <VStack direction="column">
            <Button
                colorScheme="teal"
                variant={pathname === "/admin" || "/user"? "outline" : "link"}
            >
                Hoteles
            </Button>
            <Button
                colorScheme="teal"
                variant={pathname === "/booking" ? "outline" : "link"}
                onClick={handleBooking}

            >
                Reservas
            </Button>
        </VStack>
    );
};

export default Aside;
