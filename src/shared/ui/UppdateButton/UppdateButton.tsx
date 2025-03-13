import { FC } from "react";
import { GlobalSvgSelector } from "../../../assets/icons/GlobalSvgSelector";
import styles from "./Uppdate.module.scss";

type UppdateButtonProps = {
  fetchMatches: () => void;
  isLoading: boolean;
};

export const UppdateButton: FC<UppdateButtonProps> = ({
  fetchMatches,
  isLoading,
}) => {
  return (
    <button
      className={`${styles.button} ${isLoading ? styles.disabled : ""}`}
      onClick={fetchMatches}
      disabled={isLoading}
    >
      <span className={isLoading ? styles.rotating : ""}>
        Обновить <GlobalSvgSelector id="uppdate-button" />
      </span>
    </button>
  );
};
