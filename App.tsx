import { SafeAreaView } from 'react-native'
import React from 'react'
import { Text } from './src/components/Text/Text'
import { Button } from './src/components/Button/Button'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme/theme'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1, padding: 10 }}>
        <Text preset="headingLarge">CoffStack</Text>

        <Button title='Entrar' marginBottom="s24" />
        <Button loading title="Loading" />
      </SafeAreaView>
    </ThemeProvider>
  )
}