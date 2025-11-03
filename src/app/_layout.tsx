import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../../context/authContext'
import { supabase } from '../../lib/supabase'




const _layout = () => {

  return (

    <AuthProvider>
        <Mainlayout />
    </AuthProvider>
  )
  
}


export default function Mainlayout() {

  
// const {setAuth} = useAuth();

// const router = useRouter();


//   useEffect(() => {
    
//    supabase.auth.onAuthStateChange((_event, session) => {
      
//     console.log('session :', session?.user?.id)

//     if(session) {
//       setAuth(session?.user)
//       router.replace('/home')

//     } else {
//       setAuth(null)
//       router.replace('/welcome')
//     }

//     })
    
//   }, [])
  

  return (
   <Slot />
  )
}

const styles = StyleSheet.create({})