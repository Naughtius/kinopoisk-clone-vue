import { $api } from ".";

export const getMoviePremiersApi = async (year: number, month: string) => {
  return $api.get("/v2.2/films/premieres", {
    params: {
      year,
      month,
    },
  });
};
