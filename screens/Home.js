import React from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import {setState} from 'expect';
import {useEffect} from 'react';
import {
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
  getDocumentaries,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');
const Home = ({navigation}) => {
  const imageUrl = 'https://images.tmdb.org/t/p/w500';
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaries, setDocumentaries] = useState();
  const [error, setError] = useState(false);
  const [loaded , setLoaded] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];

        movies.forEach(movie => {
          console.log('https://images.tmdb.org/t/p/w500' + movie.poster_path);
          moviesImagesArray.push(
            'https://images.tmdb.org/t/p/w500' + movie.poster_path,
          );
          setMoviesImages(moviesImagesArray);
        });
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });

    getPopularTv()
      .then(tv => {
        setPopularTv(tv);
      })
      .catch(err => {
        setError(err);
      });

      getFamilyMovies()
      .then(famMovies => {
        setFamilyMovies(famMovies);
      })
      .catch(err => {
        setError(err);
      });

      getDocumentaries()
      .then(docs => {
        setDocumentaries(docs);
      })
      .catch(err => {
        setError(err);
      });
      checkLoaded()
      
  }, []);

  checkLoaded =()=>{
    if(!error){
      setLoaded(true);
    }
  }

  return (
 
    <React.Fragment>
      {loaded && 
      <ScrollView >
      {moviesImages && (
        <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          autoplay={true}
          circleLoop={true}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimensions.height / 1.5}></SliderBox>
      </View>
      )}
      {popularMovies && (
         <View style={styles.carousel}>
         <List  navigation={navigation} title="Popular movies" content={popularMovies}></List>
       </View>
      )}
      {popularTv && (
        <View style={styles.carousel}>
        <List navigation={navigation} title="Popular tv shows" content={popularTv}></List>
      </View>
      )}
      {familyMovies && (
          <View style={styles.carousel}>
          <List navigation={navigation} title="Family movies" content={familyMovies}></List>
        </View>
      )}
      {documentaries && (
          <View style={styles.carousel}>
          <List navigation={navigation} title="Documentaries" content={documentaries}></List>
        </View>
      )}
    
    </ScrollView>}
    {console.log('loaded final state => ', loaded)}
      
    {!loaded && <ActivityIndicator /> }
    {error && <Error />}
    {console.log('loaded error final state => ', error)}
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
