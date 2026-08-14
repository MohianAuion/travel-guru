import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';


const AuthProvider = ({children}) => {

    // createUserWithEmailAndPassword
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInWithEmailAndPassword
    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authData={
        createUser,
        userLogin,
    }

    return <AuthContext value={authData} >{children}</AuthContext>
};

export default AuthProvider;