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
        <Text textAlign='center' color="carrotSecondary" marginBottom='s16' preset="headingLarge">Welcome!</Text>

        <Button title='Primary' marginBottom="s12" />
        <Button disabled title='Disabled' marginBottom="s12" />
        <Button title='Outline' preset='outline' marginBottom="s12" />
        <Button loading title="Loading" marginBottom="s12" />
        <Button disabled preset="outline" title="lading" marginBottom="s12" />
      </SafeAreaView>
    </ThemeProvider>
  )
}