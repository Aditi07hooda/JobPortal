import React from 'react'
import { Stack } from 'expo-router'
import "../global.css";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(auth)" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  )
}

export default Layout;