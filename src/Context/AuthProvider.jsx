import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user, setUser]=useState(null);

    // setCurrentUser
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        };
    },[])

    // createUserWithEmailAndPassword
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInWithEmailAndPassword
    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sendPasswordResetEmail
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    // sign in with google
    const loginWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider);
    }

    // logOut
const logOut=()=>{
    return signOut(auth);
}
    


    const authData={
        user,
        createUser,
        userLogin,
        loginWithGoogle,
        resetPassword,
        logOut,
    }

    return <AuthContext value={authData} >{children}</AuthContext>
};

export default AuthProvider;