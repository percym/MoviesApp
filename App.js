import React from 'react';
import {  StyleSheet} from 'react-native';
import { DefaultTheme,NavigationContainer } from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';


const colorsToAdd= DefaultTheme.colors;
const App = () => {

  return (
    <NavigationContainer navTheme={navTheme}>
      <MainNavigation />
   
    </NavigationContainer>
   
  );
}

const navTheme = {
  DefaultTheme,
  colors: {
    colorsToAdd,
    background: 'transparent',
  },
};
export default App;