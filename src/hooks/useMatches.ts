import { useCallback, useEffect, useState } from "react";
import { Match } from "@api/types";
import apiService from "@api/ApiService";

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMatches = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await apiService.matches.getMatches();
      setMatches(data.data.matches);
    } catch (error) {
      console.error("Ошибка загрузки матчей:", error);
      setError("Ошибка: не удалось загрузить информацию");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  return { matches, error, isLoading, fetchMatches };
}
