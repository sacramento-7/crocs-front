'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const storedUserToken = Cookies.get('Token');
        const isAdminUser = Cookies.get('IsAdmin');
        if (storedUserToken) {
            setToken(storedUserToken);
        }
        if(isAdminUser){
            setIsAdmin(isAdminUser);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ token, setToken, isAdmin, setIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UseAuth = () => useContext(AuthContext);