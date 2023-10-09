//@vendors
import { Grid, GridItem, Show } from "@chakra-ui/react";

//@components
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
            w="100vw"
            gap="1"
            fontWeight="bold"
        >
            <GridItem pl="2" area={"header"}>
                <Header />
            </GridItem>
            <Show above="lg">
                <GridItem area={"aside"} p={4} shadow="md" borderWidth="1px" backgroundColor="gray.50">
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
