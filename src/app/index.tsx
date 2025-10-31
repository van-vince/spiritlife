import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/screenWraper'


export default function index() {
    
    const router = useRouter()
  return (
    <ScreenWrapper>
        <Text> Text</Text>
      <Button title='welcome' onPress={()=>router.push('welcome')}/>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})