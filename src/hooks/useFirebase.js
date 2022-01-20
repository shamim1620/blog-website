import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Home/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const registerUser = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                //save to database
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                // Signed in 
                const user = userCredential.user;
                setErrorMessage('');
                // ...
                navigate('/home')
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });

    }
    const loginUser = (email, password, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setErrorMessage('');
                // ...
                navigate('/home')

            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        registerUser,
        loginUser,
        errorMessage,
        logOut
    }


}
export default useFirebase;