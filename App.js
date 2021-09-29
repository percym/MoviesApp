import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { useState } from 'react'; 
import { setState } from 'expect';
import { useEffect } from 'react';
import { getPopularMovies } from './services/services';  
import Home from './screens/Home'


const App = () => {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  <Home></Home>
      </View>
  );
}

export default App;