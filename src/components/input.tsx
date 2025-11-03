import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'

export default function Input({props}: any) {
  return (
    <View style={[styles.container]}>
      {
        props.Icon && props.Icon
      }
      <TextInput 
        style={{flex: 1}}
        placeholderTextColor={theme.colors.textLight}
        // ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      height:hp(7.2),
      alignItems: 'center',
      justifyContent:'center',
      borderWidth: 0.4,
      borderColor: theme.colors.text,
      borderRadius: theme.radius.sm,
      borderCurve: 'continuous',
      paddingHorizontal: 18,
      gap: 12

    }
})