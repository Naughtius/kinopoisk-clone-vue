<template>
  <div>
    <movie-premiers />
  </div>
</template>

<script lang="ts">
import MoviePremieres from "@/components/MoviePremieres.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    "movie-premiers": MoviePremieres,
  },
});
</script>
