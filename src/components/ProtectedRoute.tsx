import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
    shouldRedirect = false,
    redirectPath = "/login",
    children,
}) => {
    if (shouldRedirect) {
        return children;
    }
    return <Navigate to={redirectPath} replace={true} />;
};

export default ProtectedRoute;
