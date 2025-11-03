import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/screenWraper'
import BackButton from '../components/backButton'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Input from '../components/input'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Button from '../components/Button'
import {supabase} from '../../lib/supabase'


export default function SignUp() {

    const router = useRouter();

    const emailRef = useRef("")
    const nameRef = useRef("")
    const passwordRef = useRef("")
    const [loading, setLoading] = useState(false) 

    const onSubmit = async() => {

        if(!emailRef.current || !passwordRef.current) {
            Alert.alert('Sign Up', "please fill all the filed");
            return
        }
        //  submit login details

        let name = nameRef.current.trim()
        let email = emailRef.current.trim()
        let password = passwordRef.current.trim()

        setLoading(true)

        const {data : {session}, error} = await supabase.auth.signUp({ 
            email,
            password,
            options: {
                data: {
                    name
                }
            }
        });
        
        setLoading(false)

        console.log("session: ", session)
        // console.log("error: ", error)

        if (error) Alert.alert(error.message)
    }

  return (
    <ScreenWrapper bg='white'>
        <StatusBar style='dark' />
        <View style={styles.container} > 
        <BackButton router={router} />

        {/* welcome */}
        <View>
            <Text style={styles.WelcomeText}>Let's</Text> 
            <Text style={styles.WelcomeText}>Get Started</Text> 
        </View>
        <View style={styles.form}>
            <Text style={{fontSize:hp(1.7), color: theme.colors.text}}> Please Sign up to continue</Text>
        </View>

        {/* Text input */}

        <View style={styles.inputContainer}>
            <FontAwesome name="user-o" size={24} strokeWidth={1.6} />
            <TextInput 
                placeholder='Username'
                onChangeText={(value:string)=> emailRef.current = value}
                placeholderTextColor={theme.colors.textLight}
            />           
        </View>
        <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} strokeWidth={1.6}/>
            <TextInput 
                placeholder='Enter your Email'
                onChangeText={(value:string)=> emailRef.current = value}
                placeholderTextColor={theme.colors.textLight}
            />           
        </View>

        <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} strokeWidth={1.6}/>
            <TextInput 
                placeholder='Enter your password'
                secureTextEntry
                onChangeText={(value:string)=> passwordRef.current = value}
                placeholderTextColor={theme.colors.textLight}
            />           
        </View>
        
        {/* <Text style={styles.forgotpassword}>Forgot password</Text> */}

        {/* Button */}
        <Button 
         title={'Sign Up'}
         loading={loading} 
         onPress={onSubmit}
         /> 

         {/* footer Area */}
         <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() =>router.push('login')}>
                <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: '700'}]}>Log In</Text>
            </Pressable>
         </View>
        </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap : 45,
        paddingHorizontal: wp(5)
    },
     inputContainer: {
      flexDirection:'row',
      height:hp(7.2),
      alignItems: 'center',
      borderWidth: 0.4,
      borderColor: theme.colors.text,
      borderRadius: theme.radius.sm,
      borderCurve: 'continuous',
      paddingHorizontal: 18,
      gap: 12
,
    },

    WelcomeText: {
        fontSize: hp(4),
        fontWeight: '600',
        color: theme.colors.text
    },
    form:{
        gap: 45
    },
    forgotpassword:{
        textAlign:'right',
        fontWeight: '700',
        color: theme.colors.text
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText:{
        fontSize:hp(1.7), 
        color: theme.colors.text
    }
})