export default {
  fetchMovies: (context, name) => {
    context.commit('GET_MOVIES', name);
  },

  fetchMovieInfo: async (context, id) => {
    await context.commit('GET_MOVIE_INFO', id);
  },

  fetchMovieTrailer: (context, id) => {
    context.commit('GET_TRAILER', id);
  },

  fetchGenres: context => {
    context.commit('GET_GENRES');
  }
};
