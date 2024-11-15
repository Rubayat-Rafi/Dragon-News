import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    const handleCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUserLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(()=>{
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSub();
        }
    },[])


    const authData = {

        handleCreateUser,
        setUser,
        user,
        userLogOut,
        handleUserLogIn,
        loading,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;