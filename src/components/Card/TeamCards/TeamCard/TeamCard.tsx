import { FC } from "react";
import { PlayerCard } from "./PlayerCard/PlayerCard";
import { Team } from "@/shared/api/types";
import styles from "./TeamCard.module.scss";

interface TeamCardProps {
  team: Team;
}

export const TeamCard: FC<TeamCardProps> = ({ team }) => {
  return (
    <div className={styles.container}>
      <div className={styles.playersWrapper}>
        {team.players.map((player) => (
          <PlayerCard player={player} />
        ))}
      </div>
      <div className={styles.results}>
        <p className={styles.text}>
          Points: <span className={styles.value}>+{team.points}</span>
        </p>
        <p className={styles.text}>
          Место: <span className={styles.value}>{team.place}</span>
        </p>
        <p className={styles.text}>
          Всего убийств: <span className={styles.value}>{team.total_kills}</span>
        </p>
      </div>
    </div>
  );
};
