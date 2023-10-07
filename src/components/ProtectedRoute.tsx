import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {

    if(user.type != "Admin"){
        return <Navigate to="HotelViajero" />
    }

  return children ? children : <Outlet/>
}

export default ProtectedRoute