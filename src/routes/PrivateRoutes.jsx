import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { AuthContext } from "../provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) return <PulseLoader/>
    if(user) return children

    return <Navigate to='/login' state={location.pathname} replace='true'/>
};

export default PrivateRoutes;
