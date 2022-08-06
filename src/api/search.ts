import { $api } from ".";

export const getSearchDataApi = async (keyword: string) => {
  return $api.get("/v2.1/films/search-by-keyword", {
    params: {
      keyword,
    },
  });
};
