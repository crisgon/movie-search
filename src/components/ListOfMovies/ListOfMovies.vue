<template>
  <div class="list-movies">
    <input-search 
      placeholder="Busque um filme por nome, ano ou gênero..."
      @input.native="fetchAllMovies($event.target.value)"
    />

    <h3 v-if="!movies.length">{{message}}</h3>

    <div v-else>
      <card-movie
        @click.native="fetchAllMovieInfo(movie.id)" 
        v-for="(movie, index) in movies.slice(start, end)" 
        :key="index" 
        :movie="movie"/>

        <ul class="paginate">
          <li 
            v-show="movies.length > 4"
            v-for="page in pages" 
            :key="page"
            :class="{'circle active': page == currentPage}"
            @click="changePage(page)">
            {{ page }}
          </li>
        </ul> 
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import CardMovie from '@/components/CardMovie/CardMovie';
import InputSearch from '@/components/InputSearch/InputSearch';

export default {
  components: {
    CardMovie,
    InputSearch
  },

  data() {
    return {
      message: 'Nothing yet...',
      pages: 0,
      currentPage: 1,
      moviesPerPage: 5,
      start: 0,
      end: 5,
      movies: []
    };
  },

  computed: {
    ...mapGetters(['getMovies'])
  },

  methods: {
    ...mapActions(['fetchMovies', 'fetchMovieInfo', 'fetchMovieTrailer']),

    async fetchAllMovies(name) {
      await this.fetchMovies(name);
      this.numberOfPages();
      this.movies = this.getMovies;
    },

    fetchAllMovieInfo(id) {
      this.fetchMovieInfo(id);
      this.fetchMovieTrailer(id);
    },

    paginate(page) {
      if (page == 1) {
        this.start = 0;
        this.end = this.moviesPerPage;
      } else {
        this.start = this.moviesPerPage * (this.currentPage - 1);
        this.end = this.start + this.moviesPerPage;
      }
    },

    numberOfPages() {
      if (this.movies.length < 5) return;
      this.pages = Math.round(this.movies.length / 5);
    },

    changePage(page) {
      this.currentPage = page;
      this.paginate(page);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/mixins.scss';
.list-movies {
  width: 90%;
  margin: 0 auto;

  input {
    margin: 1rem 0;
  }
}

.paginate {
  display: flex;
  justify-content: center;

  li {
    font-size: 1.5rem;
    font-family: 'Abel', sans-serif;
    color: #116193;
    display: inline;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: trasform 0.2s;

    &:hover {
      transform: translateY(-3px);
    }
  }

  .active {
    font-size: 1.5rem;
    padding: 1rem;
    color: #00e8e4;
    animation: pageAnimation 0.3s;
    @include circle(20px, 20px, 2px, 4px);
  }
}

@keyframes pageAnimation {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>


