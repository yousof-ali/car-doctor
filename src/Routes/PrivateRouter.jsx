import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <span className="loading loading-spinner text-accent"></span>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

export default PrivateRouter;