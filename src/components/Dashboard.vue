<template>
  <div class="flex h-full">
    <sidebar />
    <div class="bg-[#ededee] dark:bg-[#0D0D0D] w-full">
      <div class="my-10 mx-10"><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "./Sidebar.vue";

export default defineComponent({
  name: "DashBoard",
  components: { sidebar },
});
</script>

<style scoped lang="scss"></style>
