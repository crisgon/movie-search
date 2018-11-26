<template>
  <div id="app">
    <header class="main-header">

      <router-link class="back"
        to="/" 
        v-show="$route.path != '/'">
        &#171;  Back
      </router-link>

      <h1 class="main-header-title">Movies</h1>
    </header>
    
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',

  mounted() {
    this.fetchGenres();
  },

  methods: {
    ...mapActions(['fetchGenres'])
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Abel|Lato');

body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  color: #838383;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  max-width: 1024px;
  margin: 0 auto;
}

.main-header {
  width: 100%;
  padding: 0.2rem 0;
  background-color: #116193;
  text-align: center;
  position: relative;

  &-title {
    font-weight: lighter;
    font-size: 2rem;
    font-family: 'Abel', sans-serif;
    color: #00e8e4;
  }

  .back {
    font-size: 1.2rem;
    color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
