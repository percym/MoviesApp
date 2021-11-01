import { genericTypeAnnotation } from '@babel/types';
import React, { Fragment ,  useEffect, useState} from 'react';
import { ScrollView, Text,Image, StyleSheet,Dimensions, ActivityIndicator ,View} from 'react-native';
import { getMovie } from '../services/services';
import StarRating from 'react-native-star-rating';
    
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
             <ScrollView >
               <Image style={styles.image}
                     resizeMode="cover" 
                     source={
                        movieDetail.poster_path?{uri:'https://images.tmdb.org/t/p/w500'+ movieDetail.poster_path}: placeholderImage}/>
               <View style={styles.container}>
                 <Text style={styles.movieTitle}>{movieDetail.title}</Text>    
                 { movieDetail.genres && (
                      <View style={styles.genresContainer} > 

                     {movieDetail.genres.map(genre => {
                         return(
                         <Text key={genre.id}>{genre.name}</Text>
                         )
                     })}
                  
                 </View>)} 
                 <StarRating
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        disabled={false}
                        maxStars={5}
                        rating={movieDetail.vote_average / 2 }
                />    
               </View>         
           </ScrollView>
           )}
            {!loaded && <ActivityIndicator /> }
           
        </Fragment>        
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height: height /2,
       
    },
    movieTitle:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
      textAlign:'center'
    },
    genresContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    genre:{

    }
})
export default Detail;