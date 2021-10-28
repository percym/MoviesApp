import React, { Fragment ,  useEffect, useState} from 'react';
import { ScrollView, Text,Image, StyleSheet,Dimensions, ActivityIndicator } from 'react-native';
import { getMovie } from '../services/services';
    
    const placeholderImage = require('../assets/images/placeholderimage.jpg');
    const height = Dimensions.get('screen').height;
    const width = Dimensions.get('screen').width;

const Detail = ({route, navigation}) => {
    
    const movieId = route.params.movieId;
    const [loaded, setLoaded] = useState();
    const [movieDetail, setMovieDetail] = useState();

    useEffect(()=>{
        getMovie(movieId).then(movieData=>{
            setMovieDetail(movieData);
            console.log(movieData);
            setLoaded(true);
        }).catch(err=>{
            console.log('movie details error',err);
            setLoaded(false);
        })

    },[movieId])
    return (
        <Fragment>{loaded && (
             <ScrollView>
               <Image style={styles.image}
                     resizeMode="cover" 
                     source={
                        movieDetail.poster_path?{uri:'https://images.tmdb.org/t/p/w500'+ movieDetail.poster_path}: placeholderImage}/>
           </ScrollView>
           )}
            {!loaded && <ActivityIndicator /> }
           
        </Fragment>        
    );
}
const styles=StyleSheet.create({
    container:{
        padding:5,
        position:"relative",

    },
    image:{
        height: height /2,
       
    }
})
export default Detail;