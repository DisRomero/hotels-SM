import { useState } from "react";
import authenticateUser from "../back-end/api";
import AdminRoute from "./AdminRoute";
import {FormControl,FormLabel,Input,Button, Center,} from "@chakra-ui/react";


const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [error, setError] = useState('');

    const handleSubmit = () => {
        const user = authenticateUser(userEmail, userPass);

        if (user) {
            alert("Inicio de sesión exitoso");
            console.log("Inicio de sesión exitoso:", user.userType);
            if(user.userType==='Admin'){
                return (
                    <AdminRoute user />
                )
            }else{

            }
            // Almacenar login en localStorage
            localStorage.setItem('sessionData', JSON.stringify(user));

        } else {
            alert("Inicio de sesión fallido");
            setError('Credenciales incorrectas');
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
                    style={{ borderColor: error ? 'red' : 'initial' }}
                />
                <FormLabel>Contraseña</FormLabel>
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}
                    style={{ borderColor: error ? 'red' : 'initial' }}
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
