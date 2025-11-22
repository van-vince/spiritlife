import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../components/screenWraper'
import { useAuth } from '../../../../context/authContext'
import { useRouter } from 'expo-router'
import { Session } from '@supabase/supabase-js'
import Header from '../../../components/header'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from '../../../constants/theme'
import { hp, wp } from '../../../helpers/common'
import { supabase } from '../../../../lib/supabase'
import Avatar from '../../../components/avatar'




export default function profile() {

  const {user, setAuth} = useAuth()
  const router = useRouter()

  const onLogout = async()=> {
    const {error} = await supabase.auth.signOut()
    if(error) {
      Alert.alert('Sign out', " Error signing out")
      return
  }
}


      const handleLogout = async() => {
      // show confirmation alert
      Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => onLogout(),
          style: "destructive"
        }
      ])
    }

  return (
    <ScreenWrapper>
      <UserHeader user={user} router={router} handleLogout={handleLogout} />
    </ScreenWrapper>
  )
}



const UserHeader = ({user, router, handleLogout}: {user: any | null, router: any, handleLogout: () => void}) => {


  return  (
    <View style={{flex:1, backgroundColor: 'white', paddingHorizontal: 4}}>
      <Header title = 'Profile' mb={30} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} >
        <MaterialIcons name="logout" size={26} color={theme.colors.rose} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={{gap:15}}>
          <View style={styles.avatarContainer}>
          <Avatar 
          uri={user?.image}
          size={hp(12)}
          rounded={theme.radius.xxl*1.4}
          />
          <Pressable style={styles.editIcon} onPress={()=> router.push('editProfile')}>
            <MaterialIcons name="edit" size={20} strokeWidth={2}  />
          </Pressable>
          </View>
          {/* username and address */}
          <View style={{alignItems: 'center', gap:4}}>
            <Text style={styles.userName}>{user && user.name}</Text>
            <Text style={styles.infoText}>{user && user.address}</Text>
          </View>

          {/* email phone and bio */}
          <View style={{gap: 10}}>
            <View style={styles.info}>
              <MaterialIcons name='email' size={20} color={theme.colors.textLight}  />
              <Text style={styles.infoText}>{user && user.email}</Text>
            </View>
            <View style={styles.info}>
              <MaterialIcons name='phone' size={20} color={theme.colors.textLight}   />
              <Text style={styles.infoText}>{user && user.phone}</Text>
            </View>
            <View style={styles.info}>
              <MaterialIcons name='info' size={20} color={theme.colors.textLight}  />
              <Text style={styles.infoText}>{user && user.bio}</Text>
            </View>
          </View>
        </View>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20,

  },
  headerShape:{
    width: wp(100),
    height: hp(20),
    
  },
  avatarContainer:{
    width: hp(12),
    height: hp(12),
    alignSelf: 'center',
  },
  editIcon:{
    position: 'absolute',
    bottom: 0,
    right: -12,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: theme.colors.textDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
},
  info: {
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontSize: hp(1.2),
    fontWeight: '500',
    color: theme.colors.textLight,
  },

  logoutButton: {
   position: 'absolute',
   right: 0,
   padding: 5,
   borderRadius: theme.radius.sm,
   backgroundColor: "#fee2e2"
  },

  lifeStyle:{
    paddingHorizontal: wp(4),
    paddingBottom: 30,
  },
  noPost:{
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text,
  },
  userName: {
    fontSize: hp(3),
    fontWeight: '500',
    color: theme.colors.textDark
  }
})