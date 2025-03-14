import { FC } from "react";
import { ErrorMessage } from "@shared/ui/ErrorMessage/ErrorMessage";
import { UpdateButton } from "@/shared/ui/UppdateButton/UppdateButton";
import styles from "@components/Header/Header.module.scss";

interface HeaderProps {
  fetchMatches: () => void;
  error: string | null;
  isLoading: boolean;
}

export const Header: FC<HeaderProps> = ({ fetchMatches, error, isLoading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Match Tracker</div>
      <div className={styles.content}>
        {error && <ErrorMessage text={error} />}
        <UpdateButton fetchMatches={fetchMatches} isLoading={isLoading} />
      </div>
    </div>
  );
};
