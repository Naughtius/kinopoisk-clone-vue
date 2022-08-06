<template>
  <div class="text-gray-500 dark:text-gray-300 mb-5">
    По запросу: "{{ $route.query.t }}". Найдено
    {{ $store.state.search.items.length }} {{ getWordFilm }}
  </div>
  <div>
    <div
      role="status"
      class="mt-10 flex items-center justify-center"
      v-if="$store.state.search.isLoading"
    >
      <inline-svg
        :src="require('../assets/icons/spinner.svg')"
        class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      />
      <span class="sr-only">Loading...</span>
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      <premier-movie
        :name="movie.nameRu"
        :poster="movie.posterUrlPreview"
        :category="movie.genres[0].genre"
        v-for="movie in $store.state.search.items"
        :key="movie.filmId"
        :link="'/movie/' + movie.filmId"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { declOfNum } from "@/utils/index";

export default defineComponent({
  name: "SearchView",
  mounted() {
    this.$store.dispatch("search/searchFetch", this.$route.query.t);
  },
  computed: {
    getWordFilm(): string {
      return declOfNum(this.$store.state.search.items.length, [
        "фильм",
        "фильма",
        "фильмов",
      ]);
    },
  },
  watch: {
    "$route.query.t"() {
      const searchQuery = this.$route.query.t;

      if (searchQuery) {
        this.$store.dispatch("search/searchFetch", searchQuery);
      }
    },
  },
});
</script>
