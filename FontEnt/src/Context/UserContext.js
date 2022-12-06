import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config'




export const AuthContext = createContext();
const auth = getAuth(app)





const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //1 create user 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //2 Update Name

    const updateName = (name) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName:name})
    }

  

    //4 Update Name
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // 5 Logout 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // 6 Login with password 
    const signin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

 


    const authInfo = {user, createUser,updateName,signInWithGoogle,logOut,signin,loading}  

//5 Update Name
    useEffect(()=>{
       
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return(()=>{
           
            unSubscribe()
        })
    }, [])


    return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default UserContext;