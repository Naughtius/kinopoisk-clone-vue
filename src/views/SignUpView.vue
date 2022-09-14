<template>
  <div class="flex items-center justify-center">
    <div>
      <h1 class="text-5xl font-extrabold dark:text-white mb-10">Sign Up</h1>
      <form class="w-96" @submit.prevent="onSubmit">
        <div class="mb-6">
          <label
            for="nickname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your nickname</label
          >
          <input
            type="text"
            id="nickname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Naughtius"
            v-model="nickname"
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="***"
            v-model="password"
          />
        </div>
        <div class="flex items-center">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <router-link
            to="/auth/sign-in"
            class="font-medium text-blue-600 hover:underline dark:text-blue-500 ml-3 cursor-pointer"
          >
            Sign In
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignUpView",
  data() {
    return {
      nickname: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.nickname, this.password);
    },
  },
});
</script>
