import { getSearchDataApi } from "@/api/search";
import { Module } from "vuex";
import { IStore } from ".";

export interface ISearchState {
  items: Array<1>;
  isLoading: boolean;
}

const search: Module<ISearchState, IStore> = {
  namespaced: true,
  state: {
    items: [],
    isLoading: true,
  },
  getters: {
    getOptionsMovie(state) {
      return [...state.items].map((item: any) => ({
        value: item.filmId,
        label: item.nameRu,
        ...item,
      }));
    },
  },
  mutations: {
    SET_ITEMS: (state, items) => (state.items = items),
    SET_LOADING_TRUE: (state) => (state.isLoading = true),
    SET_LOADING_FALSE: (state) => (state.isLoading = false),
  },
  actions: {
    async searchFetch({ commit }, search) {
      commit("SET_LOADING_TRUE");
      try {
        const { data } = await getSearchDataApi(search);
        commit("SET_ITEMS", data.films);
      } catch (e) {
        console.log(e);
      } finally {
        commit("SET_LOADING_FALSE");
      }
    },
  },
  modules: {},
};

export default search;
