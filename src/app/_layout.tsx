import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, Stack, useRouter } from 'expo-router'
import  AuthProvider, { useAuth }  from '../../context/authContext'
import { supabase } from '../../lib/supabase'
import { getUserdata } from '../../services/userService'
import ScreenWrapper from '../components/screenWraper'




// wrapping main layout with Authprovider
const _layout = () => {

  return (

    <AuthProvider>
        <Mainlayout />
    </AuthProvider>
  )
  
}


export default function Mainlayout() {
  
const {setAuth, setUserData} = useAuth();

const router = useRouter();


// Getting auth change state and routing after login
  useEffect(() => {
  
   supabase.auth.onAuthStateChange((_event, session) => {
      
    if(session) {
      setAuth(session?.user)
      updatedUserData(session?.user)
      router.replace('/home')

    } else {
      setAuth(null)
      router.replace('/welcome')
    }
    })
    
  }, [])


// Getting data from public users table and setting it to setUserdata to
// be used in user profile
  const updatedUserData = async (user: any) => {
    let res = await getUserdata(user?.id)
    if(res?.success) setUserData(res.data)
      // console.log(res?.data)
  }

  return (
      <Slot />
  )
}

const styles = StyleSheet.create({})