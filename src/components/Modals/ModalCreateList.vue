<template>
  <modal :show="show" :title="title" :handleClose="handleClose">
    <template v-slot:body>
      <div>
        <a-select
          v-model:value="name"
          show-search
          placeholder="Search film"
          :default-active-first-option="false"
          :show-arrow="false"
          :filter-option="false"
          :not-found-content="null"
          :options="getOptionsMovie"
          @search="searchInput"
          @change="handleChange"
          class="w-64"
        />
        <div>
          <premier-movie
            :name="movie.nameRu"
            :poster="movie.posterUrlPreview"
            :category="movie.genres[0].genre"
            v-for="movie in selectedMovies"
            :key="movie.kinopoiskId"
            childclass="mr-3 w-60"
            :link="'/movie/' + movie.kinopoiskId"
          />
        </div>
      </div>
    </template>
  </modal>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalCreateList",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    handleClose: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      selectedMovies: [] as any,
    };
  },
  methods: {
    searchInput(val: string) {
      this.$store.dispatch("search/searchFetch", val);
    },
    handleChange(val: string) {
      const findedMovie = this.$store.state.search.items.find(
        (movie: any) => movie.filmId === val
      );
      this.selectedMovies = [...this.selectedMovies, findedMovie];
    },
  },
  computed: mapGetters({
    getOptionsMovie: "search/getOptionsMovie",
  }),
});
</script>

<style scoped lang="scss"></style>
