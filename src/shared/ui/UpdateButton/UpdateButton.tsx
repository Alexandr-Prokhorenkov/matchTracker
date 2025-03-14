import { FC } from "react";
import { GlobalSvgSelector } from "@/assets/icons/GlobalSvgSelector";
import styles from "./Update.module.scss";

type UpdateButtonProps = {
  fetchMatches: () => void;
  isLoading: boolean;
};

export const UpdateButton: FC<UpdateButtonProps> = ({
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
