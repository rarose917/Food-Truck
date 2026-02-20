import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Espresso Express Home' }} />
        <Tabs.Screen name="menu" options={{ title: 'Espresso Express Info' }} />
    </Tabs>
  )
}

export default _layout