//@vendors
import { useContext } from "react";
import { Grid, GridItem, Text, Center } from "@chakra-ui/react";

//@components
import GridWrapper from "./GridWrapper";
import HotelAdmin from "./HotelAdmin";
import HotelUser from "./HotelUser";
import InfoBooking from "./InfoBooking";

//@db
import { getBookingByUserEmail } from "../api/db";           
import { DbContext } from "../AuthContext";


const Booking = () => {
    const { db } = useContext(DbContext);
    const UserIDLSParse = JSON.parse(localStorage.getItem("userSession"));
    const userEmail = getBookingByUserEmail(db, UserIDLSParse.userEmail )
    const userBooking = UserIDLSParse.bookingId;
            
    if(userBooking.length <1){
        alert('No cuenta con reservas')
        UserIDLSParse.userType === "admin" ? <HotelAdmin/> : <HotelUser/>
    }
    
    return (
        <GridWrapper>
            <Grid>
                <GridItem>
                    <Center>
                        <Text>Lista de Reservas</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    {userBooking.map((user, i: number) => (
                            <InfoBooking 
                            key={i}
                            email={userEmail.email}
                            starDate={userEmail.starDate}
                            endDate={userEmail.endDate}
                            userType={userEmail.userType}
                            />
                    ))}
                </GridItem>
            </Grid>
        </GridWrapper>
    );
};
export default Booking;
