import { FC } from 'react'
import { ErrorMessage } from '../../shared/ui/ErrorMessage/ErrorMessage'
import { UppdateButton } from '../../shared/ui/UppdateButton/UppdateButton'
import styles from './Header.module.scss'

interface HeaderProps {
  fetchMatches: () => void;
  error: string | null;
}

export const Header: FC<HeaderProps> = ({ fetchMatches, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Match Tracker</div>
      <div className={styles.content}>
      {error && <ErrorMessage text={error}/>}
      <UppdateButton fetchMathes={fetchMatches}/>
      </div>
    </div>
  )
}