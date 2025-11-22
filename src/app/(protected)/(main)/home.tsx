
// This should be the indexx.tsx file for the (protected)/(main)

import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../components/screenWraper'
import { useAuth } from '../../../../context/authContext'
import { supabase } from '../../../../lib/supabase'
import { hp, wp } from '../../../helpers/common'
import { theme } from '../../../constants/theme'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import Avatar from '../../../components/avatar'
import post  from '../../../../assets/data/posts.json'
import PostListItem from '../../../components/postListItem'

export default function Home() {

  const {user, setAuth} = useAuth() 
  // console.log(user)

  const router = useRouter();

  

 

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>Spiritlife</Text>
          <View style={styles.icon}>
            <Pressable onPress={() =>router.push('notification')}>
              <EvilIcons name="heart" size={30} color="black" />
            </Pressable>
            <Pressable onPress={() =>router.push('create')}>
              <EvilIcons name="plus" size={30} color="black" />
            </Pressable>
            <Pressable onPress={() =>router.push('profile')}>
              <Avatar 
              // @ts-ignore
              uri={user?.image}
              size={hp(3.0)}
              rounded={theme.radius.sm}
              style={{ borderWidth:0.5 }}
              />
            </Pressable>
            <Pressable onPress={() =>router.push('settings')}>
              <EvilIcons name="navicon" size={30} color="black" />
            </Pressable>
          </View>
        </View>

        <View>
            <FlatList
      data={post}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
          </View>
          </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(5)
  },
  title:{
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: '500'
  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius:theme.radius.sm,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray,
    borderWidth: 3
  },
  icon: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  }



})