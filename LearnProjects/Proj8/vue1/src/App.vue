<template>
  <!-- <HelloWorld /> -->
  <!-- <Rating /> -->
  <!-- <WordGenerate /> -->
  <!-- <TikTakTow /> -->
  <!-- <Movie /> -->
  <API />
</template>



<script>
import HelloWorld from './components/HelloWorld.vue';
import Rating from './components/Rating.vue';
import WordGenerate from './components/WordGenerate.vue';
import TikTakTow from './components/TikTakTow.vue';
import Movie from './components/movieappcomponents/Movie.vue';
import API from './components/apilearn/API.vue';

  export default {
    name : 'App',
    components : {
      HelloWorld,
      Rating,
      WordGenerate,
      TikTakTow,
      Movie,
      API,
    }
  }
</script>


<style>

</style>