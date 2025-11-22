import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { Image } from 'expo-image'
import { hp } from '../helpers/common'
import getUserImageSrc from '../../services/imageService'

export default function Avatar({
    uri,
    size = hp(4.3),
    rounded = theme.radius.xl,
    style={}

}) {
  return (
    <View>
      <Image 
        source={getUserImageSrc(uri)}
        transition={100}
        style={[styles.avatar, { width: size, height: size, borderRadius: rounded }, style]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: {
        borderCurve: 'continuous',
        backgroundColor: theme.colors.darkLight,
        borderEndWidth: 1,
    },

})