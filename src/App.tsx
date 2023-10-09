//@vendors
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//@componets
import HotelAdmin from "./components/HotelAdmin";
import HotelUser from "./components/HotelUser";
import Booking from "./components/Booking";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateHotel from "./components/CreateHotel";
import EditHotel from "./components/EditHotel";

//@db
import { AuthContext, DbContext } from "./AuthContext";
import { getUserFromLS, storeUserInLS, storeHotelIDInLS } from "./api/userAuth";
import data from "./components/back-end/data.json";

function App() {
    const [currentUser, setCurrentUser] = useState(() => getUserFromLS());
    const [db, setDb] = useState(data);
    const isAdmin = (user) => (user && user.userType === "admin") || false;
    const isValidUser = (user) => !!user && user.userType;

    const setCurrentSession = (user) => {
        setCurrentUser(user);
        storeUserInLS(user);
    };

    const setCurrentHoteSession = (hotel) => {
        storeHotelIDInLS(hotel);
    };

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentSession }}>
            <DbContext.Provider value={{ db, setDb, setCurrentHoteSession }}>
                <BrowserRouter>
                    <Routes borderColor="red">
                        <Route path="/" element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route
                            path="admin"
                            element={
                                <ProtectedRoute
                                    shouldRedirect={isAdmin(currentUser)}
                                >
                                    <HotelAdmin />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="user"
                            element={
                                <ProtectedRoute
                                    shouldRedirect={isValidUser(currentUser)}
                                >
                                    <HotelUser />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="booking"
                            element={
                                <ProtectedRoute
                                    shouldRedirect={isValidUser(currentUser)}
                                >
                                    <Booking />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="create-hotel" element={<CreateHotel />} />
                        <Route path="edit-hotel" element={<EditHotel />} />
                    </Routes>
                </BrowserRouter>
            </DbContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
