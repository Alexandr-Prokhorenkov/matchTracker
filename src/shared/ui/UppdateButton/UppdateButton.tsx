import { FC } from "react";
import { GlobalSvgSelector } from "../../../assets/icons/GlobalSvgSelector";
import styles from "./Uppdate.module.scss";

type UppdateButtonProps = {
  fetchMathes: () => void
}


export const UppdateButton: FC<UppdateButtonProps> = ({ fetchMathes }: { fetchMathes: () => void }) => {
  return (
<button className={styles.button} onClick={fetchMathes}>
  <span>Обновить <GlobalSvgSelector id="uppdate-button" /></span>
</button>
  );
};
