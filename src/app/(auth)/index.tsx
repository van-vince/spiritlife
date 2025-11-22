import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../../components/screenWraper'
import Loading from '../../components/loading'


export default function index() {
    
    const router = useRouter()
  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center' }}>
      <Loading />
    </View>
  )
}

const styles = StyleSheet.create({})