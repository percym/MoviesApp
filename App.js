import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useState } from 'react'; 
import { setState } from 'expect';
import { useEffect } from 'react';
import { getPopularMovies } from './services/services';  
import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
          <Stack.Navigator>     
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
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