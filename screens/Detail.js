import {genericTypeAnnotation} from '@babel/types';
import React, {Fragment, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  View,
  Modal,
  Pressable,
} from 'react-native';
import {getMovie} from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat, {masks} from 'dateformat';
import PlayButton from '../components/PlayButton';
import Video from '../components/Video';

const placeholderImage = require('../assets/images/placeholderimage.jpg');
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;
  const [loaded, setLoaded] = useState();
  const [movieDetail, setMovieDetail] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId)
      .then(movieData => {
        setMovieDetail(movieData);
        console.log(movieData);
        setLoaded(true);
      })
      .catch(err => {
        console.log('movie details error', err);
        setLoaded(false);
      });
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Fragment>
      {loaded && (
        <View>
          <ScrollView>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={
                movieDetail.poster_path
                  ? {
                      uri:
                        'https://images.tmdb.org/t/p/w500' +
                        movieDetail.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetail.title}</Text>
              {movieDetail.genres && (
                <View style={styles.genresContainer}>
                  {movieDetail.genres.map(genre => {
                    return <Text key={genre.id}>{genre.name}</Text>;
                  })}
                </View>
              )}
              <StarRating
                disabled={true}
                maxStars={5}
                rating={movieDetail.vote_average / 2}
                fullStarColor={'gold'}
                starSize={30}
              />
              <Text style={styles.overview}>{movieDetail.overview}</Text>
              <Text style={styles.release}>
                {'Release date:' +
                  dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.videoModal}>
              {/* <Pressable onPress={() => videoShown()}>
                  <Text>Hide Modal</Text>
              </Pressable> */}
             <Video onClose={()=>videoShown}/>
            </View>
          </Modal>
        </View>
      )}
      {!loaded && <ActivityIndicator />}
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    },
  image: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  genresContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {},
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  videoModal:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
});
export default Detail;
