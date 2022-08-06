<template>
  <div class="mb-4 md:mb-0">
    <!-- Dropdown menu -->
    <div
      class="z-10 w-[75px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 mb-2"
      v-bind:class="{ hidden: !dropdownOpen, block: dropdownOpen }"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li
          v-for="(locale, i) in locales"
          :key="`locale-${i}`"
          class="cursor-pointer"
          @click="switchLocale(locale.value)"
        >
          <span
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center"
          >
            <inline-svg :src="locale.icon" class="mr-2 w-4 h-4" />
            {{ locale.name }}
          </span>
        </li>
      </ul>
    </div>
    <button
      class="text-white focus:ring-4 focus:outline-none focus:ring-bg-gray-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center bg-[#a3a3a8] dark:bg-[#1F1F1F] uppercase"
      type="button"
      @click="changeOpenDropdown"
    >
      {{ $i18n.locale }}
      <inline-svg
        :src="require('../assets/icons/arrow-down.svg')"
        class="ml-2 w-4 h-4"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import russiaIcon from "@/assets/icons/flags/russia.svg";
import enIcon from "@/assets/icons/flags/united_kingdom.svg";
import { ILocale } from "@/types/locale";

export default defineComponent({
  name: "LocaleSwitcher",
  data() {
    return {
      locales: [
        {
          id: 1,
          name: "EN",
          value: "en",
          icon: enIcon,
        },
        {
          id: 2,
          name: "RU",
          value: "ru",
          icon: russiaIcon,
        },
      ] as ILocale[],
      dropdownOpen: false,
    };
  },
  methods: {
    changeOpenDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    switchLocale(locale: string) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
      this.$store.commit("global/setLanguage", locale);
      this.changeOpenDropdown();
    },
  },
});
</script>
