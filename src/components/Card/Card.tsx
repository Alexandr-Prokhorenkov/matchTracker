import { FC, useState } from "react";
import { TeamDisplay } from "./TeamDisplay/TeamDisplay";
import { TeamCards } from "./TeamCards/TeamCards";
import { GlobalSvgSelector } from "@/assets/icons/GlobalSvgSelector";
import { CardStatus } from "@/shared/ui/CardStatus/CardStatus";
import { Match } from "@/shared/api/types";
import styles from "./Card.module.scss";


interface CardProps {
  match: Match;
}

export const Card: FC<CardProps> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <TeamDisplay name={match.homeTeam.name} isIconBefore/>
        <div className={styles.count}>
          <p className={styles.countNumbers}>
            {match.homeScore} : {match.awayScore}
          </p>
          <CardStatus status={match.status} />
        </div>
        <div className={styles.awayTeamWrapper}>
          <TeamDisplay name={match.awayTeam.name} />
          <button
            className={`${styles.arrow} ${isExpanded ? styles.arrowUp : ""}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <GlobalSvgSelector id="arrow" />
          </button>
        </div>
      </div>
      {isExpanded && <TeamCards match={match} />}
    </>
  );
};
