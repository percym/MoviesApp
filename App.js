import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import axios from 'axios';
import { useState } from 'react'; 
import { setState } from 'expect';
import { useEffect } from 'react';
import { getPopularMovies } from './services/services';  
import Home from './screens/Home'


const App = () => {

  return (
    <View style={styles.sliderContainer}>
  <Home></Home>
      </View>
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