import { VStack, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Aside = () => {
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
            >
                Reservas
            </Button>
        </VStack>
    );
};

export default Aside;
