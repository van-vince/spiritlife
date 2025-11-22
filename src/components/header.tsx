import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import BackButton from './backButton';
import { hp } from '../helpers/common';
import { theme } from '../constants/theme';



export default function Header({title, showBackButton = true, mb=10}: {title: string, showBackButton?: boolean, mb?: number}) {

    const router = useRouter();


  return (
    <View style={[styles.container, {marginBottom: mb}]}>
     {showBackButton && (
        <View style={styles.backButton}>
            <BackButton router={router} />
        </View>
     )}
        <Text style={styles.title}>{title || ""}</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            gap: 10
        },
        backButton: {
            position: 'absolute',
            left: 0,
        },
        title: {
            fontSize: hp(2.7),
            fontWeight: '700',
            color: theme.colors.textDark
        },
})