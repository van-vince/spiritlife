import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot} from 'expo-router'

export default function _layout() {
  return (
    <Slot />
  )
}

const styles = StyleSheet.create({})


// Authentication redirection should be handled here instead of in the main layout
