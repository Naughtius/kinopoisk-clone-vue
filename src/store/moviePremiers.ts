import { getMoviePremiersApi } from "@/api/moviePremiers";
import { Module } from "vuex";
import { IStore } from ".";

export interface IMoviePremiersState {
  movies: Array<1>;
}

const moviePremiers: Module<IMoviePremiersState, IStore> = {
  namespaced: true,
  state: {
    movies: [],
  },
  mutations: {
    SET_PREMIERS_DATA: (state, movies) => (state.movies = movies),
  },
  actions: {
    async getMoviePremiers({ commit }) {
      try {
        const { data } = await getMoviePremiersApi(2022, "JULY");
        commit("SET_PREMIERS_DATA", data.items);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
};

export default moviePremiers;
