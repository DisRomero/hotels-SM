//@vendors
import { useState, useContext } from "react";
import { FormControl, FormLabel, Input, Button,Flex, Box, Heading, InputGroup, InputRightElement } from "@chakra-ui/react";

//@db
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../api/userAuth";

const Login = () => {
    const Auth = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = () => {
        const user = authenticateUser(userEmail, userPass);

        if (user) {
            Auth.setCurrentSession(user);
            if (user.userType === "user") {
                return navigate("/user");
            }
            if (user.userType === "admin") {
                return navigate("/admin");
            }
        } else {
            alert("Inicio de sesión fallido");
            setError("Credenciales incorrectas");
        }
    };

    return (
        <>
        <Flex m={6} align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" backgroundColor="gray.50">
                <Box textAlign="center">
                <Heading>Iniciar Sesion</Heading>
                </Box>
                <Box my={4} textAlign="left">
                <form>
                    <FormControl isRequired>
                        <FormLabel>Correo electronico</FormLabel>
                        <Input
                        type="email"
                        placeholder="user@user.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        style={{ borderColor: error ? "red" : "initial" }}
                        />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                        <FormLabel>Contraseña</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    paddingRight='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    value={userPass}
                                    onChange={(e) => setUserPass(e.target.value)}
                                    style={{ borderColor: error ? "red" : "initial" }}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' 
                                    onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                    </FormControl>
                    <Button
                    mt={4}
                    width="full"
                    colorScheme="blue"
                    type="submit"
                    onClick={handleSubmit}
                    >
                        Iniciar sesion
                    </Button>
                </form>
                </Box>
                
            </Box>
        </Flex>
      
        </>
    );
};

export default Login;
