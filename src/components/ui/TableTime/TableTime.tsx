import React from 'react'
import { Title } from '@vkontakte/vkui'
import { Icon28ClockOutline } from '@vkontakte/icons'

import { useAppSelector } from 'hooks/redux'

import './TableTime.css'
import { selectActiveTableCompletedAt, selectActiveTableStartedAt } from 'store/selectors/activeTable'

export const TableTime: React.FC = () => {
   const startedAt = useAppSelector(selectActiveTableStartedAt)
   const completedAt = useAppSelector(selectActiveTableCompletedAt)

   const time = useStopwatch(startedAt, completedAt)

   return (
      <div className={'TableTime'}>
         <Icon28ClockOutline width={24} height={24} className='TableTime__icon' />
         <Title level='2' weight='2' className='TableTime__text'>
            {time}
         </Title>
      </div>
   )
}

const useStopwatch = (startedAt: number | null, completedAt: number | null) => {
   const [time, setTime] = React.useState('')
   const intervalRef = React.useRef<NodeJS.Timer | null>(null)

   const updateTime = React.useCallback(() => {
      setTime(formatTime(startedAt))
   }, [startedAt])

   React.useEffect(() => {
      updateTime()

      intervalRef.current = setInterval(updateTime, 1000)

      return () => {
         if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
         }
      }
   }, [updateTime])

   React.useEffect(() => {
      if (completedAt !== null) {
         if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
         }
      }
   }, [startedAt, completedAt])

   return time
}

const formatTime = (timestampStart: number | null) => {
   const milliseconds = Date.now() - (timestampStart || Date.now())

   const secondsPassed = milliseconds / 1000

   const minutes = Math.floor(secondsPassed / 60)
   const seconds = Math.floor(secondsPassed % 60)

   let time = ''

   if (minutes > 0) {
      time += `${minutes} м `
   }
   time += `${seconds} с`

   //   const time = `${Math.floor(seconds / 60)}:${(seconds % 60).toFixed(2)}`
   return time
}
