import { FC } from "react";
import { GlobalSvgSelector } from "@/assets/icons/GlobalSvgSelector";
import styles from "./TeamDisplay.module.scss";

interface TeamDisplayProps {
  name: string;
  isIconBefore?: boolean;
}

export const TeamDisplay: FC<TeamDisplayProps> = ({ name, isIconBefore }) => (
  <div className={styles.team}>
    {isIconBefore && <GlobalSvgSelector id="team-icon" />}
    <p className={styles.teamName}>{name}</p>
    {!isIconBefore && <GlobalSvgSelector id="team-icon" />}
  </div>
);
