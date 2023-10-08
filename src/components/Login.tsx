import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

import { authenticateUser } from "../api/userAuth";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
} from "@chakra-ui/react";

const Login = () => {
    const Auth = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

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
        <Center>
            <FormControl isRequired m={2}>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="user@user.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    style={{ borderColor: error ? "red" : "initial" }}
                />
                <FormLabel>Contraseña</FormLabel>
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}
                    style={{ borderColor: error ? "red" : "initial" }}
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
