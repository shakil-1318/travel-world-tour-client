import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)


            .finally(() => setIsLoading(false))
    }

    // google logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })

            .finally(() => setIsLoading(false))
    }

    // observe change wheather state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;