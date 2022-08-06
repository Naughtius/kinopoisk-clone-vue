<template>
  <div class="text-gray-900 dark:text-gray-300">
    <div class="text-lg mb-4">КИНОПРЕМЬЕРЫ</div>
    <Flicking :options="sliderOptions">
      <premier-movie
        :name="movie.nameRu"
        :poster="movie.posterUrlPreview"
        :category="movie.genres[0].genre"
        v-for="movie in $store.state.moviePremiers.movies"
        :key="movie.kinopoiskId"
        childclass="mr-3 w-60"
        :link="'/movie/' + movie.kinopoiskId"
      />
    </Flicking>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Flicking from "@egjs/vue3-flicking";

export default defineComponent({
  name: "MoviePremieres",
  components: {
    Flicking,
  },
  data() {
    return {
      sliderOptions: {
        align: "prev",
        deceleration: 0.005,
        bound: true,
      },
    };
  },
  mounted() {
    this.$store.dispatch("moviePremiers/getMoviePremiers");
  },
});
</script>

<style scoped lang="scss"></style>
