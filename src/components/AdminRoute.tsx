import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { HotelAdmin } from "./pages/hotelAdmin";
import HotelUser from "./HotelUser";
import Booking from "./Booking";

const AdminRoute = (user) => {
    return (
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    );
};

export default AdminRoute;
