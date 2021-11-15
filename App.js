import React from 'react';
import {  StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';




const App = () => {

  return (
    <NavigationContainer>
      <MainNavigation />
   
    </NavigationContainer>
   
  );
}
const styles = StyleSheet.create({
      sliderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }
})
export default App;