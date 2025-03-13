import { FC } from 'react'
import { Match } from '../../shared/api/types'
import styles from './CardList.module.scss'
import { Card } from '../Card/Card'

interface CardListProps {
  matches: Match[]
}

export const CardList: FC<CardListProps> = ({matches}) => {
  return (
    <div className={styles.container}>
      {matches.map(match => <Card match={match}/>)}
    </div>
  )
}