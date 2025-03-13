import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import apiService from "./shared/api/ApiService";
import { Match } from "./shared/api/types";

import { CardList } from "./components/CardList/CardList";

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchMathes = useCallback(async () => {
    try {
      const data = await apiService.matches.getMatches();
      setMatches(data.data.matches);
    } catch (error) {
      console.error("Ошибка загрузки матчей:", error);
      setError("Ошибка: не удалось загрузить информацию");
    }
  }, []);

  useEffect(() => {
    fetchMathes();
  }, [fetchMathes]);

  console.log(matches);
  return (
    <>
      <div className={styles.app}>
        <Header fetchMatches={fetchMathes} error={error} />
        <CardList matches={matches}/>
      </div>
    </>
  );
}

export default App;
