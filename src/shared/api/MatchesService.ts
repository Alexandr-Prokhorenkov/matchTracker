import { AxiosInstance } from "axios";
import { MatchesResponse } from "./types";

export const createMatchesService = (api: AxiosInstance) => ({
  getMatches: async () => {
    const res = await api.get<MatchesResponse>("/fronttemp");
    return res.data;
  },
});
