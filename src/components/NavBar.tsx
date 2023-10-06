import {HStack, Image, Text} from '@chakra-ui/react';
import logo from '../assets/hotelIcon.png';

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo}/>
            <Text> Hotel SM</Text>
        </HStack>

    )
}

export default NavBar;