import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session, User } from "@supabase/supabase-js";


type AuthData = {
    user: User | null
    setAuth :   any
    setUserData:   any
}

const AuthContext = createContext<AuthData>({user: null, setAuth: ()=>{}, setUserData: ()=>{}})


export default function AuthProvider ( {children}:PropsWithChildren)  {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)

        const setAuth = (authUser: User) => {
            setUser(authUser)
        }

        const setUserData = (userData: User) => {
            setUser({...userData})
        }
  
    return (
        <AuthContext.Provider value={{user, setAuth, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)



// import { createContext, ReactNode, useContext, useState } from "react";

// const AuthContext = createContext({});


// export function AuthProvider({ children }) {

//     const [user, setUser] = useState(null)

//     const setAuth = authUser => {
//         setUser(authUser)
//     }

//     const setUserData = userData => {
//         setUser({...userData})
//     }


//     return (
//         <AuthContext.Provider value = {{ user, setAuth, setUserData,}} >
//             {
//                 children
//             }
//         </AuthContext.Provider>
//     )
// }


// export const useAuth = () => useContext(AuthContext)