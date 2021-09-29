import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { useState } from 'react'; 
import { setState } from 'expect';
import { useEffect } from 'react';
import { getPopularMovies, getUpcomingMovies } from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';


const Home =()=>{
    const imageUrl = 'https://images.tmdb.org/t/p/w500';
    const [moviesImages, setMoviesImages] = useState(['http://www.tiptoncommunications.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png']);
    const [error, setError] = useState(false);
  
  
    useEffect(() => {
        getUpcomingMovies().then(movies=>{

            const moviesImagesArray = [];
            
            console.log('https://images.tmdb.org/t/p/w500'+ movie.poster_path);
            movies.forEach(movie => {
            moviesImagesArray.push('https://images.tmdb.org/t/p/w500'+ movie.poster_path);
            setMoviesImages(moviesImagesArray);
        })
        }).catch(err =>{
            setError(err);
        })

    
    },[]);

  
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       
        <SliderBox images={moviesImages}></SliderBox>
         </View>
    );
   
}

    export default Home;

