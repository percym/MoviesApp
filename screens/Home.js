import React from 'react';
import { Text, View , Dimensions, StyleSheet} from 'react-native';
import axios from 'axios';
import { useState } from 'react'; 
import { setState } from 'expect';
import { useEffect } from 'react';
import { getPopularMovies, getUpcomingMovies } from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';

    const dimensions = Dimensions.get('screen');
const Home =()=>{
    const imageUrl = 'https://images.tmdb.org/t/p/w500';
    const [moviesImages, setMoviesImages] = useState(['https://placeholder.com/']);
    const [error, setError] = useState(false);
  
  
    useEffect(() => {
        getUpcomingMovies().then(movies=>{

            const moviesImagesArray = [];
            
           
            movies.forEach(movie => {
                console.log('https://images.tmdb.org/t/p/w500'+ movie.poster_path);    
            moviesImagesArray.push('https://images.tmdb.org/t/p/w500'+ movie.poster_path);
            setMoviesImages(moviesImagesArray);
        })
        }).catch(err =>{
            setError(err);
        })

    
    },[]);

  
    return(
        <View style={styles.sliderContainer}>
       
        <SliderBox 
          images={moviesImages} 
          autoplay={true} circleLoop={true} 
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimensions.height/1.5}></SliderBox>
         </View>
    );
   
}
const styles = StyleSheet.create({
    sliderContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    sliderStyle:{
        height:0
    }
})

    export default Home;

