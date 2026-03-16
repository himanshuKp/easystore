import {useAuth} from "../hooks/useAuth.jsx";
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoute() {
    const {isAuthenticated} = useAuth();
    console.log(isAuthenticated);
    return (
        isAuthenticated ? <Outlet/> : <Navigate to={"/login"}/>
    )
}