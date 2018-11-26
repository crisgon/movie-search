import Vue from 'vue';
import Router from 'vue-router';
import ListOfMovies from '@/components/ListOfMovies/ListOfMovies';
import MovieInfo from '@/components/MovieInfo/MovieInfo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListOfMovies',
      component: ListOfMovies
    },
    {
      path: '/movie',
      name: 'MovieInfo',
      component: MovieInfo
    }
  ]
});
