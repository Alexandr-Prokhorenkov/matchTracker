import { FC } from 'react'
import styles from './ErrorMessage.module.scss'
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector'

interface ErrorMessageProps {
  text: React.ReactNode
}

export const ErrorMessage:FC<ErrorMessageProps> = ({text}) => {
  return (
    <div className={styles.Container}>
      <GlobalSvgSelector id='error-message'/>
      <p className={styles.ErroeText}>{text}</p>
    </div>
  )
}