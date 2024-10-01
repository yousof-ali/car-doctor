import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)
   
    const signUp = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const userStateChange = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                setLoader(false);
            }
        })
        return userStateChange;
    },[])

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    const signIn = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    

    const values = {user,loader,signUp,logOut,signIn}
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;