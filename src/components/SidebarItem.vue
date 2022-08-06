<template>
  <li>
    <router-link
      :to="link"
      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#ededee] dark:hover:bg-[#1F1F1F]"
      active-class="bg-[#ededee] dark:bg-[#1F1F1F]"
    >
      <inline-svg :src="icon" />
      <span class="ml-3 truncate">{{ name }}</span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SibeBarItem",
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss"></style>
