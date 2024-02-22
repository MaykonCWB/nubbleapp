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
        <Text color="carrotSecondary" marginBottom='s16' preset="headingLarge">CoffStack</Text>

        <Button title='Primary' marginBottom="s12" />
        <Button title='Outline' preset='outline' marginBottom="s12" />
        <Button title='Secondary' preset='secondary' marginBottom="s12" />

        <Button loading title="Loading" />
      </SafeAreaView>
    </ThemeProvider>
  )
}