<template>
  <modal :show="show" :title="title" :handleClose="handleClose">
    <template v-slot:body>
      <iframe
        :src="getUrlTrailer"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full h-[60vh]"
      ></iframe>
    </template>
  </modal>
</template>

<script lang="ts">
import { getYoutubeId } from "@/utils";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalTrailer",
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
  computed: {
    getUrlTrailer() {
      const youtubeId = getYoutubeId(this.$store.state.movie.trailer);

      return "https://www.youtube.com/embed/" + youtubeId;
    },
  },
});
</script>

<style scoped lang="scss"></style>
