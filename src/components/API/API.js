import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "8ebd992ebf6676a7bed7f776a8342b9f";

export const apiFavMov = () =>
  axios.get(`${URL}/trending/movie/week?api_key=${KEY}`);

export const apiSearchMov = (query, page) =>
  axios.get(`${URL}/search/movie?api_key=${KEY}&query=${query}&page=${page}`);

export const apiId = (movieId) =>
  axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);

export const apiMovCredit = (movieId) =>
  axios.get(`${URL}/movie/${movieId}/credits?api_key=${KEY}`);

export const apiMovReviews = (movieId) =>
  axios.get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}`);
