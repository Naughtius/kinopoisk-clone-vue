<template>
  <aside aria-label="Sidebar" class="mr-[280px]">
    <div
      class="overflow-y-auto py-4 px-3 bg-white dark:bg-[#080808] h-screen flex justify-between flex-col fixed"
    >
      <div>
        <router-link to="/" class="flex items-center pl-2.5 mb-5">
          <inline-svg
            :src="require('../assets/icons/logo.svg')"
            class="mr-3 h-6 sm:h-7"
          />
        </router-link>
        <search-form />
        <ul class="space-y-2 mt-4">
          <sidebar-item
            v-for="link in getLinks"
            :key="link.id"
            :name="link.name"
            :link="link.href"
            :icon="link.icon"
          />
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
          v-if="myList.length"
        >
          <p class="text-xs text-gray-500 p-2">{{ $t("sidebar.list") }}</p>
          <sidebar-item
            v-for="link in myList"
            :key="link.id"
            :name="link.name"
            :link="link.href"
            :icon="link.icon"
          />
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
          v-else
        >
          <p class="text-xs text-gray-500 p-2">{{ $t("sidebar.listEmpty") }}</p>
        </ul>
        <button
          @click="changeActiveCreateListModal"
          type="button"
          class="text-white dark:text-[#1F1F1F] bg-[#F33F3F] hover:bg-[#F33F3F]/90 focus:ring-4 focus:outline-none focus:ring-[#F33F3F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F33F3F]/55 mr-2 mb-2 w-full mt-4 justify-center"
        >
          <inline-svg
            :src="require('../assets/icons/plus.svg')"
            class="mr-2 -ml-1 w-4 h-4"
          />
          <span
            class="hidden sm:hidden md:hidden lg:inline xl:inline 2xl:inline"
          >
            {{ $t("sidebar.listCreate") }}
          </span>
        </button>
      </div>
      <div
        class="flex justify-between items-start flex-col md:flex-row md:items-end"
      >
        <locale-switcher />
        <dark-mode-switcher />
      </div>
    </div>
    <modal-create-list
      :show="isCreateListModal"
      :handleClose="changeActiveCreateListModal"
      title="Создать список"
    />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import homeIcon from "@/assets/icons/home.svg";
import aboutIcon from "@/assets/icons/about.svg";
import loginIcon from "@/assets/icons/sign-in.svg";
import SearchForm from "@/components/SearchForm.vue";
import SidebarItem from "@/components/SidebarItem.vue";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import { ISidebarLink } from "@/types/sidebar";
import DarkModeSwitcher from "@/components/DarkModeSwitcher.vue";
import ModalCreateList from "./Modals/ModalCreateList.vue";

export default defineComponent({
  name: "SibeBar",
  components: {
    "search-form": SearchForm,
    "sidebar-item": SidebarItem,
    "locale-switcher": LocaleSwitcher,
    "dark-mode-switcher": DarkModeSwitcher,
    ModalCreateList,
  },
  data() {
    return {
      myList: [] as ISidebarLink[],
      isCreateListModal: false,
    };
  },
  computed: {
    getLinks(): ISidebarLink[] {
      return [
        {
          id: 1,
          name: this.$t("sidebar.home"),
          href: "/",
          icon: homeIcon,
        },
        {
          id: 2,
          name: this.$t("sidebar.about"),
          href: "/about",
          icon: aboutIcon,
        },
        {
          id: 3,
          name: this.$t("sidebar.login"),
          href: "/auth/sign-in",
          icon: loginIcon,
        },
      ];
    },
  },
  methods: {
    changeActiveCreateListModal() {
      this.isCreateListModal = !this.isCreateListModal;
    },
  },
});
</script>

<style scoped lang="scss"></style>
