import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { HotelAdmin } from "./pages/hotelAdmin";

const AdminRoute = (user) => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/hotelAdmin" element={<ProtectedRoute user={!!user}>
    <HotelAdmin/>
    </ProtectedRoute>} /></Routes>     
    </BrowserRouter> 
  )
}

export default AdminRoute;