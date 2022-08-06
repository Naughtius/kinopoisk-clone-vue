import { Module } from "vuex";
import { IStore } from ".";

export interface IGlobalState {
  language: string;
  darkMode: string;
}

const global: Module<IGlobalState, IStore> = {
  namespaced: true,
  state: {
    language: localStorage.getItem("language") || "en", // en, ru
    darkMode: localStorage.getItem("darkMode") || "darkMode", // darkMode, lightMode
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
      localStorage.setItem("language", language);
    },
    setDarkMode(state, currentMode) {
      state.darkMode = currentMode;
      localStorage.setItem("darkMode", currentMode);
    },
  },
  modules: {},
};

export default global;
