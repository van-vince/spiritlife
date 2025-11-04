import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";


type AuthData = {
    user: Session | null
    setAuth :   Function 
    setUserData:   Function 
}

const AuthContext = createContext<AuthData>({user: null, setAuth: ()=>{}, setUserData: ()=>{}})


export default function AuthProvider ( {children}:PropsWithChildren)  {

    const [user, setUser] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true)

        const setAuth = (authUser: Session) => {
            setUser(authUser)
        }

        const setUserData = (userData: any) => {
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