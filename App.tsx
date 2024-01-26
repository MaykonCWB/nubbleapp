import { SafeAreaView } from 'react-native'
import React from 'react'
import { Text } from './src/components/Text/Text'

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{ color: 'blue' }}>Hello World!</Text>
    </SafeAreaView>
  )
}