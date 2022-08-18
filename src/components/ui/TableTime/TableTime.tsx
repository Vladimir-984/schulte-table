import React from 'react'
import { Title } from '@vkontakte/vkui'
import { Icon28ClockOutline } from '@vkontakte/icons'

import { useAppSelector } from 'hooks/redux'

import './TableTime.css'

export const TableTime: React.FC = () => {
   const startedAt = useAppSelector((state) => state.table.active.startedAt)

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

   return (
      <div className={'TableTime'}>
         <Icon28ClockOutline width={24} height={24} className='TableTime__icon' />
         <Title level='2' weight='2' className='TableTime__text'>
            {time}
         </Title>
      </div>
   )
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
