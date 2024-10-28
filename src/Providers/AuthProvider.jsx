import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)
   
    const signUp = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const userStateChange = onAuthStateChanged(auth, currentUser => {  
            setLoader(false);
            setUser(currentUser);
            const userEmail = currentUser?.email || user?.email
            const currentUserEmail = {email:userEmail}
            if(currentUser){
                axios.post('https://car-doctor-server-delta-nine-48.vercel.app/jwt',currentUserEmail,{withCredentials:true})
                .then(res => {
                    console.log('token response',res.data)
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
            else{
                axios.post('https://car-doctor-server-delta-nine-48.vercel.app/logout',currentUserEmail,{withCredentials:true})
                .then(res => {
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
            
        })
        return () => {
            userStateChange();
        } 
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