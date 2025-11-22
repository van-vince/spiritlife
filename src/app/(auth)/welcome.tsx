import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/screenWraper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'
import Button from '../../components/Button'
import { useRouter } from 'expo-router'

export default function Welcome() {

  const router = useRouter()

  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <View style={styles.container}>
        {/* welcome image */}
        <Image style={styles.welcomeImage} resizeMode='contain'  source={require('../../../assets/srmLogo.jpeg')} />

        {/* title */}
        <View style={{gap:20 }}>
          <Text style={styles.title}>Spiritlife</Text>
          <Text style={styles.punchline}>Spiritlife Revival Ministries</Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Button 
            title='Get Started'
            buttonStyle={{marginHorizontal: wp(3)}}
            onPress={()=> router.push('signUp')}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.loginText}> Already have an account?</Text>
            <Pressable  onPress={()=> router.push('login')}>
              <Text style={[styles.loginText, {color:theme.colors.primaryDark, fontWeight:'700'}]}>Login</Text>
            </Pressable>

          </View>
        </View>

      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'white',
    paddingHorizontal: wp(4)
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center'
  },

  title: {
     color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: '800'

  },

  punchline: {
   textAlign: 'center',
   paddingHorizontal: hp(10),
  fontSize: hp(1.7),
  color: theme.colors.text,
  },

  footer: {
    gap: 30,
    width: '100%'
  },
  buttonTextContainer:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5
  },
  loginText:{
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),

  }
})