<template>
  <div>
    <div
      role="status"
      class="mt-10 flex items-center justify-center"
      v-if="$store.state.movie.isLoading"
    >
      <inline-svg
        :src="require('../assets/icons/spinner.svg')"
        class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      />
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="relative">
      <div>
        <div class="flex">
          <div class="flex flex-col">
            <img :src="$store.state.movie.movie.posterUrl" class="rounded-xl" />
            <button
              @click="trailerHandler"
              type="button"
              class="w-56 mt-5 z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Смотреть трейлер
            </button>
          </div>
          <div class="text-white ml-5">
            <div class="text-gray-900 dark:text-white text-2xl mb-5">
              {{ $store.state.movie.movie.nameRu }}
            </div>
            <div class="text-gray-900 dark:text-white">
              {{ $store.state.movie.movie.description }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg"
        :style="{
          'background-image': 'url(' + $store.state.movie.movie.posterUrl + ')',
        }"
      />
    </div>
  </div>
  <modal-trailer
    :show="showModalTrailer"
    :handleClose="trailerShowHandler"
    title="Трейлер"
  />
</template>

<script lang="ts">
import ModalTrailer from "@/components/Modals/ModalTrailer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieView",
  components: { "modal-trailer": ModalTrailer },
  data() {
    return {
      id: this.$route.params.id,
      showModalTrailer: false,
    };
  },
  methods: {
    trailerHandler() {
      this.$store.dispatch("movie/getMovieTrailer", this.id);
      this.trailerShowHandler();
    },
    trailerShowHandler() {
      this.showModalTrailer = !this.showModalTrailer;
    },
  },
  mounted() {
    this.$store.dispatch("movie/getMovie", this.id);
  },
});
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
  top: -2.5rem;
  left: -2.5rem;
  right: -2.5rem;
  background-size: cover;
  height: 1000px;
  background-repeat: no-repeat;
  opacity: 0.1;
  background-position: top center;
}
</style>
