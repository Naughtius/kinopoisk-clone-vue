<template>
  <div class="text-gray-900 dark:text-gray-300" :class="childclass">
    <img
      :src="poster"
      class="rounded-md w-full pointer-events-none object-cover h-72"
    />
    <div class="mt-2 name text-sm">{{ name }}</div>
    <div class="flex items-center text-xs mt-2">
      <inline-svg
        :src="require('../assets/icons/movie.svg')"
        class="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3"
      />{{ category }}
    </div>
    <router-link :to="link">
      <button
        type="button"
        class="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Зайти
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PremierMovie",
  props: {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    childclass: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.name {
  overflow: hidden;
  width: 190px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
</style>
