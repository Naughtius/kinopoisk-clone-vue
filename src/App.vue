<template>
  <dashboard>
    <router-view />
  </dashboard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  name: "App",
  components: {
    Dashboard,
  },
});
</script>

<style lang="scss"></style>
