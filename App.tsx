import React from 'react';
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';

import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  if(!fontsLoaded){
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style='light' />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}