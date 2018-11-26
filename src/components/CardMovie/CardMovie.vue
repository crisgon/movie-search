<template>
  <router-link to="/movie">
    <div class="movie animate">
        <img :src="poster" :alt="movie.original_title" /> 
        
        <div class="movie-info">
          <div class="movie-header">
            <h2 class="movie-header-title">{{movie.original_title}}</h2>
            <span class="movie-header-date">
              {{
                formatDate(movie.release_date)
              }}
            </span>
          <span class="movie-header-average">{{movie.vote_average}}</span>
        </div>
        <p class="movie-overview">{{movie.overview}}</p>
        <Generos :generos="generos" />      
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';
import Generos from '@/components/Generos/Generos';
import formatDate from '@/helpers/formatDate.js';
export default {
  components: {
    Generos
  },

  props: ['movie'],

  data() {
    return {
      baseIMG: 'https://image.tmdb.org/t/p/w200',
      generos: []
    };
  },

  mounted() {
    this.generos = this.movie.genre_ids.map(genre => this.genres[genre]);
  },

  computed: {
    ...mapGetters({ genres: 'getGenres' }),

    poster() {
      if (this.movie.poster_path) {
        return this.baseIMG + this.movie.poster_path;
      }
      return 'https://i.imgur.com/aki4knv.jpg';
    }
  },

  methods: {
    formatDate
  }
};
</script>

<style lang="scss" scoped>
@import '@/mixins.scss';
.movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebebeb;
  width: 100%;
  margin: 1rem auto;

  &-info {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-header {
    font-family: 'Abel', sans-serif;
    color: #00e8e4;
    background-color: #116193;
    padding: 1rem 2rem;
    position: relative;

    &-title {
      font-size: 2rem;
      font-weight: lighter;
    }

    &-average {
      font-size: 1.5rem;
      position: absolute;
      bottom: -30px;
      @include circle(60px, 60px, 2px, 4px);
    }

    &-date {
      position: absolute;
      bottom: 0;
      right: 10px;
    }
  }

  &-overview {
    padding: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 700px) {
  .movie {
    flex-direction: row;
    align-items: flex-start;

    &-header {
      width: 100%;
      padding: 0;

      &-title {
        margin-left: 6rem;
      }

      &-average {
        margin-left: 1rem;
      }

      &-date {
        font-size: 1.2rem;
        color: #989797;
        bottom: -30px;
        left: 6rem;
      }
    }

    &-overview {
      padding: 2rem 1.5rem 0 1.5rem;
    }
  }
}

.animate {
  animation: fade 1s ease;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

