import { Header } from "@components/Header/Header";
import { Cards } from "@components/Cards/Cards";
import styles from "./App.module.scss";
import { useMatches } from "@/hooks/useMatches";

function App() {
  const { matches, error, isLoading, fetchMatches } = useMatches();
  return (
    <>
      <div className={styles.app}>
        <Header
          fetchMatches={fetchMatches}
          error={error}
          isLoading={isLoading}
        />
        <Cards matches={matches} />
      </div>
    </>
  );
}

export default App;
