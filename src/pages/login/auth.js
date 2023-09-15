// auth.js
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Custom hook to manage user state
export const useAuth = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Listen for changes in the authentication state
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is logged in, set the user state
                setUserId(user.uid);
            } else {
                // User is not logged in, set the user state to null
                setUserId(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    return { userId };
};

