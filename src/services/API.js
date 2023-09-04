import axios from 'axios';

const API_KEY = '1ff216614a5f040e4a5d56347d1eaf76';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async page => {
  try {
    const response = await axios.get(`trending/movie/day?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getMovieInfos = async id => {
  try {
    const response = await axios.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getSearchedMovies = async (query, page) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
