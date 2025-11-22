import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, useRouter } from 'expo-router'

export default function _layout() {
  return (
    <Slot />
  )
}

const styles = StyleSheet.create({})


// ButtonedTabs component placeholder
// Tabs will be added here in the future when needs arise

// import { Tabs } from "expo-router";
// import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: 'black',
//         headerRight: () =>
//           <Feather
//             name="log-out"
//             size={22}
//             color="black"
//             style={{ paddingRight: 10 }}
//           />
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           headerTitle: 'Reddit',
//           headerTintColor: "#FF5700",
//           tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="communities"
//         options={{
//           title: 'Communities',
//           tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} />
//         }}
//       />
//       <Tabs.Screen
//         name="create"
//         options={{
//           title: 'Create',
//           tabBarIcon: ({ color }) => <AntDesign name="plus" size={24} color={color} />,
//           headerShown: false,
//           tabBarStyle: { display: 'none' }
//         }}
//       />
//       <Tabs.Screen
//         name="chat"
//         options={{
//           title: 'Chat',
//           tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
//         }}
//       />
//       <Tabs.Screen
//         name="inbox"
//         options={{
//           title: 'Inbox',
//           tabBarIcon: ({ color }) => <Feather name="bell" size={24} color={color} />
//         }}
//       />
//     </Tabs>
//   )
// }