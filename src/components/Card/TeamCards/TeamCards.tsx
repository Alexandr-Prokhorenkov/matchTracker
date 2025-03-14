import { FC } from "react";
import { TeamCard } from "./TeamCard/TeamCard";
import { Match } from "@/shared/api/types";
import styles from "./TeamCards.module.scss";


interface TeamCardsProps {
  match: Match;
}

export const TeamCards: FC<TeamCardsProps> = ({ match }) => {
  return <div className={styles.container}>
    <TeamCard team={match.homeTeam}/>
    <TeamCard team={match.awayTeam}/>
  </div>;
};
