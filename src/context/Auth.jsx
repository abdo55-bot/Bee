import { createContext, useContext, useState } from "react";

export const AuthContext = createContext('auth'); 

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => { 

    const [authUSer, setAuthUser] = useState(JSON.parse(localStorage.getItem('userAuth')) ?? null);
    const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem('userAuth')) ? true : false);

    const value = {
        authUSer,
        setAuthUser,
        isLogged,
        setIsLogged
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
