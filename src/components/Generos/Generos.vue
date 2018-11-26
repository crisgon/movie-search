<template>
  <ul class="generos">        
    <li v-for="gender in generos" :key="gender" v-text="gender">
    </li>
  </ul>
</template>

<script>
export default {
  props: ['generos']
};
</script>

<style lang="scss" scoped>
.generos {
  max-width: 300px;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {
    list-style: none;
    font-size: 0.8rem;
    color: #116193;
    background-color: #fff;
    border: 2px solid #116193;
    border-radius: 20px;
    padding: 0.3rem 0.5rem;
    margin: 0.5rem;
  }
}
</style>

