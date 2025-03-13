import { FC } from "react";
import { Player } from "../../../../../shared/api/types";
import styles from "./PlayerCard.module.scss";
import userIcon from "../../../../../assets/icons/avatar_global.svg";

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userWrapper}>
        <img className={styles.userIcon} src={userIcon} />
        <p className={styles.userName}>{player.username}</p>
      </div>
      <p className={styles.text}>
        Убийств: <span className={styles.value}>{player.kills}</span>
      </p>
    </div>
  );
};
