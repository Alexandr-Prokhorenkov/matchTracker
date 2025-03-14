import axios from "axios";
import { createMatchesService } from "./MatchesService";

const api = axios.create({
  baseURL: "https://app.ftoyd.com/fronttemp-service",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  matches: createMatchesService(api),
};
