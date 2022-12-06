import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LodingSpinner from '../components/LodingSpinner/LodingSpinner';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <LodingSpinner></LodingSpinner>
    }
    
    if(user && user.uid) { 
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;