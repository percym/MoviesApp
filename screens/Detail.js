import React, { Fragment ,  useEffect, useState} from 'react';
import { ScrollView, Text,Image, StyleSheet } from 'react-native';
import { getMovie } from '../services/services';

const Detail = ({route, navigation}) => {
    const movieId = route.params.movieDetail.id;
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
              <Image />   
                <Text>{movieDetail.title + ' ' +movieId}</Text>
           </ScrollView>
           )}
           
           
        </Fragment>        
    );
}
const styles=StyleSheet.create({
    container:{
        padding:5,
        position:"relative",

    },
    image:{
        height:200,
        width:120,
        borderRadius:20
    }
})
export default Detail;