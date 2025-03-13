import axios, { AxiosInstance } from "axios";
import MatchesService from "./MatchesService";

class ApiService {
  private api: AxiosInstance;
  matches: MatchesService;

  constructor() {
    this.api = axios.create({
      baseURL: "https://app.ftoyd.com/fronttemp-service",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.matches = new MatchesService(this.api);
  }
}

const apiService = new ApiService();

export default apiService;

