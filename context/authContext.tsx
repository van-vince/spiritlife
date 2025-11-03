import { createContext, ReactNode, useContext, useState } from "react";

  interface AuthContextType {
        user: object | null
        setAuth: object | null
        setUserData: object | null
       
    }

     interface AuthProviderProps {
        children: React.ReactNode;
    }


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState(null)

    const setAuth = (authUser : any) => {
        setUser(authUser)
    }

    const setUserData = (userData: any) => {
        setUser({...userData})
    }

    const value: AuthContextType = {
            user,
           setAuth,
           setUserData,
        };

    return (
        <AuthContext.Provider value = {value} >
            {
                children
            }
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)