import { $api } from ".";

export const getMovieApi = async (id: number) => {
  return $api.get("/v2.2/films/" + id);
};

export const getMovieTrailerApi = async (id: number) => {
  return $api.get("/v2.2/films/" + id + "/videos");
};
