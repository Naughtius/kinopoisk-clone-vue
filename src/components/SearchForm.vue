<template>
  <form class="w-auto md:w-64" @submit.prevent="onSubmit">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >Search</label
    >
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <inline-svg
          :src="require('../assets/icons/search.svg')"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
        />
      </div>
      <input
        type="search"
        id="default-search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-[#ededee] rounded-lg border border-[#ededee] focus:ring-blue-100 focus:border-blue-100 dark:bg-[#000000] dark:border-[#1F1F1F] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[44px]"
        :placeholder="$t('sidebar.search')"
        v-model="search"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchForm",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.search.trim() !== "") {
        this.$router.push({
          path: "/search",
          query: {
            t: this.search,
          },
        });
      }
    },
  },
});
</script>

<style scoped lang="scss"></style>
