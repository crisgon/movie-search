<template>
  <div>
    <div class="movie">
      <div class="movie-header">
        <h2 class="movie-header-title">{{movie.title}}</h2>
        <span class="movie-header-date">
          {{movie.date}}
        </span>
      </div> 

      <div class="movie-info">
        <img :src="poster" :alt="movie.title" />
        <div class="movie-info-container">
          <h3 class="subtitle">Overview</h3>
          <p class="overview">{{ movie.resume }}</p>

          <h3 class="subtitle">Informations</h3>
          <ul class="movie-informations">
            <li 
              v-for="(info, index) in informations" 
              :key="index"
              class="info-item">
              <span v-text="info.name" class="info-label"></span>
              <span v-text="movie[info.value]"></span>
            </li>
          </ul>

          <Generos :generos="movie.genres" />      

          <span class="movie-average">{{movie.average}}</span>
        </div>
      </div>

    </div>

    <div class="trailer">
      <iframe :src="trailer" frameborder="0" allowfullscreen>
      </iframe>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Generos from '@/components/Generos/Generos';
export default {
  components: {
    Generos
  },

  data() {
    return {
      baseIMG: 'https://image.tmdb.org/t/p/w300',
      informations: [
        { name: 'Situation', value: 'situation' },
        { name: 'Languages', value: 'language' },
        { name: 'Runtime', value: 'runtime' },
        { name: 'Budget', value: 'budget' },
        { name: 'Revenue', value: 'revenue' }
      ]
    };
  },

  computed: {
    ...mapGetters({
      movie: 'getMovieInfo',
      trailer: 'getMovieTrailer'
    }),

    poster() {
      if (this.movie.poster) {
        return this.baseIMG + this.movie.poster;
      }
      return 'https://i.imgur.com/aki4knv.jpg';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/mixins.scss';

.movie {
  width: 100%;
  height: auto;
  margin-top: 2rem;
  background-color: #f2f2f2;
  position: relative;

  &-header {
    font-family: 'Abel', sans-serif;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;

    &-title {
      font-size: 2.2rem;
      font-weight: lighter;
      color: #116193;
    }

    &-date {
      font-size: 1.2rem;
      color: #989797;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-info-container {
    padding: 0 1rem;
    position: relative;
    .subtitle {
      width: 100%;
      border-bottom: 2px solid #00e8e4;
      font-size: 1.4rem;
    }

    .overview {
      line-height: 1.5rem;
    }
  }
}

.movie-informations {
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  .info-item {
    text-align: center;
    list-style: none;
    padding: 1rem;

    .info-label {
      font-size: 1.2rem;
      color: #116193;
      display: block;
    }
  }
}

.movie-average {
  position: absolute;
  bottom: 15px;
  right: 20px;
  font-size: 1.3rem;
  @include circle(60px, 60px, 2px, 4px);
}

.subtitle {
  font-family: 'Abel', sans-serif;
  font-weight: lighter;
  color: #116193;
}

.trailer {
  height: 0;
  position: relative;
  padding: 100px 0 60% 0;
  margin-bottom: 2rem;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 700px) {
  .movie {
    &-header {
      flex-direction: row;
      max-height: 70px;
      padding: 0 1rem;
    }

    &-info {
      flex-direction: row-reverse;
      align-items: flex-start;
    }
  }

  .movie-average {
    width: 100px;
    height: 100px;
    bottom: 2rem;
    font-size: 2.5rem;
    box-shadow: inset 0 0 0 6px #00e8e4;
    border-width: 4px;
  }
}
</style>

