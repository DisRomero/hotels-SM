import { useContext } from "react";
import { Grid, GridItem, Image, Button, Heading, Show } from "@chakra-ui/react";
import logo from "../assets/hotelIcon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { removeUserSessionFromLS } from "../api/userAuth";

const Header = () => {
    const navigate = useNavigate();
    const Auth = useContext(AuthContext);
    const handleLogOut = () => {
        Auth.setCurrentSession({});
        removeUserSessionFromLS();
        navigate("/login");
    };
    return (
        <Grid templateColumns="repeat(10, 2fr)" gap={0} alignItems="center">
            <Show above="lg">
                <GridItem colSpan={1}>
                    <Image h="50px" src={logo} />
                </GridItem>
            </Show>
            <GridItem colSpan={1}>
                <Heading size="md">Hotel SM</Heading>
            </GridItem>
            <GridItem colStart={10} colSpan={1} alignContent="right">
                <Button colorScheme="teal" onClick={handleLogOut}>
                    Logout
                </Button>
            </GridItem>
        </Grid>
    );
};

export default Header;
