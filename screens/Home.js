import React from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import {setState} from 'expect';
import {useEffect} from 'react';
import {
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const dimensions = Dimensions.get('screen');
const Home = () => {
  const imageUrl = 'https://images.tmdb.org/t/p/w500';
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyMovies, setFamilyMovies] = useState('');
  const [error, setError] = useState(false);

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
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={moviesImages}
            autoplay={true}
            circleLoop={true}
            dotStyle={styles.sliderStyle}
            sliderBoxHeight={dimensions.height / 1.5}></SliderBox>
        </View>
        <View style={styles.carousel}>
          <List title="Popular movies" content={popularMovies}></List>
        </View>
        <View style={styles.carousel}>
          <List title="Popular tv shows" content={popularTv}></List>
        </View>
        <View style={styles.carousel}>
          <List title="Family movies" content={familyMovies}></List>
        </View>
      </ScrollView>
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
