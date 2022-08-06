import { getMovieApi, getMovieTrailerApi } from "@/api/movie";
import { Module } from "vuex";
import { IStore } from ".";

export interface IMovieState {
  movie: object;
  isLoading: boolean;
  trailer: string;
}

const movie: Module<IMovieState, IStore> = {
  namespaced: true,
  state: {
    movie: {},
    isLoading: true,
    trailer: "",
  },
  mutations: {
    SET_MOVIE: (state, movie) => (state.movie = movie),
    SET_LOADING_TRUE: (state) => (state.isLoading = true),
    SET_LOADING_FALSE: (state) => (state.isLoading = false),
    SET_TRAILER: (state, trailer) => (state.trailer = trailer),
  },
  actions: {
    async getMovie({ commit }, id) {
      commit("SET_LOADING_TRUE");
      try {
        const { data } = await getMovieApi(id);
        commit("SET_MOVIE", data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("SET_LOADING_FALSE");
      }
    },
    async getMovieTrailer({ commit }, id) {
      try {
        const { data } = await getMovieTrailerApi(id);
        let url;

        data.items.forEach((item: any) => {
          if (item.site === "YOUTUBE") {
            url = item.url;
            return;
          }
        });

        commit("SET_TRAILER", url);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
};

export default movie;
