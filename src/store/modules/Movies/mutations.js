import axios from 'axios';
import formatDate from '@/helpers/formatDate';
import formatMoney from '@/helpers/formatMoney';
import formatTime from '@/helpers/formatTime';
import formatLang from '@/helpers/formatLangs';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '49f1408846dc94952c1eb7d80803a136&';

export default {
  GET_MOVIES: async (state, name) => {
    state.movies = await axios
      .get(
        `${BASE_URL}/search/movie?api_key=${KEY}language=en-US&query=${name}&include_adult=false`
      )
      .then(response => response.data.results)
      .catch(e => {
        console.log(e);
        return [];
      });
  },

  GET_MOVIE_INFO: async (state, id) => {
    state.movieInfo = await axios
      .get(`${BASE_URL}/movie/${id}?api_key=${KEY}`)
      .then(response => {
        const data = response.data;
        return {
          id: response.data.id,
          title: data.original_title,
          date: formatDate(data.release_date),
          poster: data.poster_path,
          resume: data.overview,
          situation: data.status,
          language: formatLang(data.spoken_languages),
          runtime: formatTime(data.runtime),
          budget: formatMoney(data.budget),
          revenue: formatMoney(data.revenue),
          average: data.vote_average,
          genres: data.genres.map(genre => state.genres[genre.id])
        };
      })
      .catch(e => console.log(e));
  },

  GET_TRAILER: async (state, id) => {
    state.movieTrailer = await axios
      .get(`${BASE_URL}/movie/${id}/videos?api_key=${KEY}`)
      .then(
        response =>
          'https://www.youtube.com/embed/' + response.data.results[0].key
      )
      .catch(e => console.log(e));
  },

  GET_GENRES: async state => {
    const genres = await axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`)
      .then(response => response.data.genres)
      .catch(e => console.log(e));
    genres.map(genre => (state.genres[genre.id] = genre.name));
  }
};
