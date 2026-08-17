import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user, setUser]=useState(null);
    const[loading, setLoading]=useState(true);
    const[authLoading, setAuthLoading]=useState(false);

    // setCurrentUser
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
setUser(currentUser);
setLoading(false);
        })
        return ()=>{
            unsubscribe();
        };
    },[])

    // createUserWithEmailAndPassword
    const createUser=(email, password)=>{
       setAuthLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).finally(()=>{
           setAuthLoading(false);
        })
    }

    // signInWithEmailAndPassword
    const userLogin=(email, password)=>{
        setAuthLoading(true);
        return signInWithEmailAndPassword(auth, email, password).finally(()=>{
            setAuthLoading(false);
        })
        
    }

    // sendPasswordResetEmail
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    // sign in with google
    const loginWithGoogle=()=>{
        setAuthLoading(true);
        return signInWithPopup(auth, googleProvider).finally(()=>{
            setAuthLoading(false);
        })
    }

    // logOut
const logOut=()=>{
    setAuthLoading(true);
    return signOut(auth).finally(()=>{
        setAuthLoading(false);
    })
}
    


    const authData={
        user,
        loading,
        authLoading,
        createUser,
        userLogin,
        loginWithGoogle,
        resetPassword,
        logOut,
    }

    return <AuthContext value={authData} >{children}</AuthContext>
};

export default AuthProvider;