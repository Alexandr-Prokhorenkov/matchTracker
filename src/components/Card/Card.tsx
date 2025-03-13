import { FC } from "react";
import { Match } from "../../shared/api/types";
import { CardStatus } from "../../shared/ui/CardStatus/CardStatus";
import styles from "./Card.module.scss";
import { TeamDisplay } from "./TeamDisplay/TeamDisplay";

interface CardProps {
  match: Match;
}

export const Card: FC<CardProps> = ({ match }) => {
  console.log(match);
  return (
    <div className={styles.container}>
      <TeamDisplay name={match.homeTeam.name} isIconBefore={true} />
      <div className={styles.count}>
        <p className={styles.countNumbers}>
          {match.homeScore} : {match.awayScore}
        </p>
        <CardStatus status={match.status} />
      </div>
      <TeamDisplay name={match.awayTeam.name}/>
    </div>
  );
};
