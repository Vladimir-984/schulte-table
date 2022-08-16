import React from 'react'
import { classNames, Title } from '@vkontakte/vkui'
import { Icon28ClockOutline } from '@vkontakte/icons'

import './TableTime.css'

export const TableTime: React.FC = () => {
   //TODO: брать время старта таблицы
   const timestampStart = React.useRef(Date.now())

   const [time, setTime] = React.useState('')
   const intervalRef = React.useRef<NodeJS.Timer | null>(null)

   const updateTime = React.useCallback(() => {
      setTime(formatTime(timestampStart.current))
   }, [timestampStart])

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
      <div className={classNames('TableTime')}>
         <Icon28ClockOutline width={24} height={24} className='TableTime__icon' />
         <Title level='2' weight='2' className='TableTime__text'>
            {time}
         </Title>
      </div>
   )
}

const formatTime = (timestampStart: number) => {
   const milliseconds = Date.now() - timestampStart

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
