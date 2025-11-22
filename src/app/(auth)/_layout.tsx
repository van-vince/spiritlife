import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot} from 'expo-router'

export default function _layout() {
  return (
    <Slot />
  )
}

const styles = StyleSheet.create({})


// redirection for non autheneticated users will be handled 
// here when authenticated redirection is moved from main layout