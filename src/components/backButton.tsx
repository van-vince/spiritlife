import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { theme } from '../constants/theme';


export default function BackButton({size=26, router}: any) {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Feather name="arrow-left-circle" strokeWidth={2.5} size={size} color={theme.colors.text} />
    </Pressable >
  )
}

const styles = StyleSheet.create({
    button:{
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(0,0,0,0.07)'
    }
})