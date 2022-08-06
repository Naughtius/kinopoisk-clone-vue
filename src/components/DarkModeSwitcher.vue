<template>
  <label
    for="small-toggle"
    class="inline-flex relative items-center cursor-pointer"
  >
    <input
      type="checkbox"
      value="darkMode"
      id="small-toggle"
      class="sr-only peer"
      @change="onChange"
      :checked="darkMode"
    />
    <div
      class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
    ></div>
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      <inline-svg :src="require('../assets/icons/moon.svg')" class="w-5 h-5" />
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DarkModeSwitcher",
  data() {
    return {
      dropdownOpen: false,
      darkMode: false,
    };
  },
  methods: {
    onChange() {
      const mode = !this.darkMode;
      this.darkMode = mode;
      this.$store.commit("global/setDarkMode", mode ? "lightMode" : "darkMode");
      this.switchMode(!mode);
    },
    switchMode(mode: boolean) {
      const htmlDoc = document.getElementsByTagName("html")[0];

      if (mode) {
        htmlDoc.classList.add("dark");
      } else {
        htmlDoc.classList.remove("dark");
      }
    },
  },
  mounted() {
    const mode = this.$store.state.global.darkMode === "lightMode";

    if (mode) {
      this.darkMode = !this.darkMode;
    }

    this.switchMode(!mode);
  },
});
</script>
