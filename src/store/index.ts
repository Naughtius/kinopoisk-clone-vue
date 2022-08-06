import { createStore, StoreOptions } from "vuex";
import global, { IGlobalState } from "./global";
import moviePremiers, { IMoviePremiersState } from "./moviePremiers";
import search, { ISearchState } from "./search";
import movie, { IMovieState } from "./movie";

export interface IStore {
  global: IGlobalState;
  moviePremiers: IMoviePremiersState;
  search: ISearchState;
  movie: IMovieState;
}

const store: StoreOptions<IStore> = {
  modules: {
    global,
    moviePremiers,
    search,
    movie,
  },
};

export default createStore(store);
