import { SafeAreaView } from 'react-native'
import React from 'react'
import { Text } from './src/components/Text/Text'
import Button from './src/components/Text/Button'

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">Hello World!</Text>
      <Text preset="headingLarge" italic>Hello World!</Text>
      <Button title='Entrar' />
    </SafeAreaView>
  )
}