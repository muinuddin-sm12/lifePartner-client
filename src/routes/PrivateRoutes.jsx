import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { PulseLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading) return <PulseLoader/>
    if(user) return children

    return <Navigate to='/' state={location.pathname} replace='true'/>
};

export default PrivateRoutes;
