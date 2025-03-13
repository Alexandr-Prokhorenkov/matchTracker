import { AxiosInstance } from "axios";
import { MatchesResponse } from "./types";

class MatchesService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async getMatches() {
    const res = await this.api.get<MatchesResponse>("/fronttemp");
    return res.data;
  }
}

export default MatchesService;
