import { FC } from "react";
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import { Match } from "../../shared/api/types";
import { CardStatus } from "../../shared/ui/CardStatus/CardStatus";
import styles from "./Card.module.scss";

interface CardProps {
  match: Match;
}

export const Card: FC<CardProps> = ({ match }) => {
  console.log(match)
  return (
    <div className={styles.container}>
      <div className={styles.homeTaem}>
        <GlobalSvgSelector id="team-icon" />
        <p className={styles.teamName}>{match.homeTeam.name}</p>
      </div>
      <div className={styles.count}>
        <p className={styles.countNumbers}>{match.homeScore} : {match.awayScore}</p>
        <CardStatus status={match.status} />
      </div>
      <div className={styles.awayTeam}>
        <p className={styles.teamName}>{match.awayTeam.name}</p>
        <GlobalSvgSelector id="team-icon" />
      </div>
    </div>
  );
};
