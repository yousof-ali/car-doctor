import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <span className="loading loading-spinner text-accent"></span>
    }
    if(user?.email){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
    
};

export default PrivateRouter;