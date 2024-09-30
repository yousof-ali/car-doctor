import React, { createContext, useState } from 'react';
auth
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)

    const signUp = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const values = {user,loader,signUp}
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;