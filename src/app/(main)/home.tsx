import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/screenWraper'
import { useAuth } from '../../../context/authContext'
import { supabase } from '../../../lib/supabase'

export default function Home() {

  const {user, setAuth} = useAuth() 
  // console.log(user)

  const onLogout = async()=> {
    setAuth(null)

    const {error} = await supabase.auth.signOut()
    if(error) {
      Alert.alert('Sign out', " Error signing out")
    }
  }

  return (
    <ScreenWrapper>
      <Text>Home</Text>

      <Button title='logout' onPress={onLogout}/>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({}) 