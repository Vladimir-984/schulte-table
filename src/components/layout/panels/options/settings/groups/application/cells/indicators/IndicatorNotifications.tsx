import React from 'react'

const getNotificationsIsActiveIndicator = (notifications: boolean) => (notifications ? 'Разрешены' : 'Запрещены')

export const IndicatorNotifications: React.FC = () => {
   const notifications = false
   return <>{getNotificationsIsActiveIndicator(notifications)}</>
}
