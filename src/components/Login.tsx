import { useState } from "react";
import authenticateUser from "../components/back-end/api";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
} from "@chakra-ui/react";

const Login = () => {
    const [userEmail, setUseEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    const handleSubmit = () => {
        const user = authenticateUser(userEmail, userPass);

        if (user) {
            alert("Inicio de sesión exitoso");
            console.log("Inicio de sesión exitoso:", user);
        } else {
            alert("Inicio de sesión fallido");
            console.log("Inicio de sesión fallido");
        }
    };

    return (
        <Center>
            <FormControl isRequired m={2}>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="user@user.com"
                    value={userEmail}
                    onChange={(e) => setUseEmail(e.target.value)}
                />
                <FormLabel>Contraseña</FormLabel>
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}
                />
                <Button
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Iniciar sesion
                </Button>
            </FormControl>
        </Center>
    );
};

export default Login;
