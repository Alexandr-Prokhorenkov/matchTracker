import { FC } from 'react'
import { Card } from '@components/Card/Card'
import { Match } from '@/shared/api/types'
import styles from '@components/Cards/Cards.module.scss'

interface CardsProps {
  matches: Match[]
}

export const Cards: FC<CardsProps> = ({matches}) => {
  return (
    <div className={styles.container}>
      {matches.map(match => <Card key={match.time} match={match}/>)}
    </div>
  )
}