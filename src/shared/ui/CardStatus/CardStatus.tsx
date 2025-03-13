import { FC } from "react";
import styles from "./CardStatus.module.scss";
import { mapStatusToVariant } from "../../utils/MapStatus";

interface CardStatusProps {
  status: "Finished" | "Ongoing" | "Scheduled";
}

export const CardStatus: FC<CardStatusProps> = ({ status }) => {
  const variant = mapStatusToVariant(status);

  const className =
    styles[
      variant === "Match preparing" ? "matchPreparing" : variant.toLowerCase()
    ];

  return <div className={`${styles.card} ${className}`}>{variant}</div>;
};
