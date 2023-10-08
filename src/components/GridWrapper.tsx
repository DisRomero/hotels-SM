import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./Header";
import Aside from "./Aside";

function GridWrapper({ children }) {
    return (
        <Grid
            templateAreas={{
                base: `"header header"
                "main main"`,
                lg: `"header header"
                "aside main"`,
            }}
            gridTemplateRows={"50px 1fr 30px"}
            gridTemplateColumns={"150px 1fr"}
            h="100vh"
            w="100vw"
            gap="1"
            fontWeight="bold"
        >
            <GridItem pl="2" area={"header"}>
                <Header />
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"}>
                    <Aside />
                </GridItem>
            </Show>
            <GridItem pl="2" area={"main"}>
                {children}
            </GridItem>
        </Grid>
    );
}

export default GridWrapper;
