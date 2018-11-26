<template>
  <input 
    type="text" 
    class="search" 
    :placeholder="placeholder">
</template>

<script>
export default {
  props: ['placeholder']
};
</script>

<style scoped>
.search {
  width: 100%;
  background-color: #ebebeb;
  box-sizing: border-box;
  padding: 0.8rem;
  border-radius: 25px;
  border: 0;
  font-family: 'Abel', sans-serif;
  font-size: 1.1rem;
}

::placeholder {
  color: #116193;
}
</style>

