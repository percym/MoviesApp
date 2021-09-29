import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { useState } from 'react'; 
import { setState } from 'expect';
import { useEffect } from 'react';
import { getPopularMovies } from './services/services';  


const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    getPopularMovies().then(movies=>{
      setMovie(movies[0]);
    }).catch(err =>{
      setError(err);
    });
  },[])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>  Movie Name : {movie.original_title}    </Text>
      <Text>  Language :{movie.original_language}     </Text>
      <Text>  Release Date:{movie.release_date}       </Text>
      {error ? <Text style = {{color:'red'}}> Server Error </Text> : null }
       </View>
  );
}

export default App;