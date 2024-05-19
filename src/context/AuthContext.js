'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    //const [user, setUser] = useState();
    //const [userToken, setUserToken] = useState();

    useEffect(() => {
        const storedUserToken = Cookies.get('Token');
        if (storedUserToken) {
            setToken(storedUserToken);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);