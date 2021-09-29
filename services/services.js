import axios from "axios";

const apiUrl ='https://api.themoviedb.org/3';
const apiKey ='api_key=935665956143eb69d59d40362bab7a4d';

/**
 * 
 * @returns a list of popular movies
 */
export const getPopularMovies = async()=>{
    const resp = await axios.get(
            `${apiUrl}/movie/popular?${apiKey}`
            );
    return resp.data.results;
    
  }

  /**
 * 
 * @returns a list of upcoming movies
 */
export const getUpcomingMovies = async()=>{
    const resp = await axios.get(
            `${apiUrl}/movie/upcoming?${apiKey}`
            );
    return resp.data.results;
    
  }

  /**
 * 
 * @returns a list of popular tvseries
 */
export const getPopularTv = async()=>{
    const resp = await axios.get(
            `${apiUrl}/tv/popular?${apiKey}`
            );
    return resp.data.results;
    
  }
