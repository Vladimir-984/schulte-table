import React from 'react'
import { Switch } from '@vkontakte/vkui'

export const SwitchSettingsNotificationsPush: React.FC = () => {
   const [isActive, setIsActive] = React.useState(false)

   const onChangePushNotifications: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setIsActive(e.target.checked)
   }
   return <Switch checked={isActive} onChange={onChangePushNotifications} />
}
