import { FC } from 'react'
import { Match } from '../../shared/api/types'
import styles from './CardList.module.scss'
import { Card } from '../Card/Card'

interface CardsProps {
  matches: Match[]
}

export const Cards: FC<CardsProps> = ({matches}) => {
  return (
    <div className={styles.container}>
      {matches.map(match => <Card match={match}/>)}
    </div>
  )
}