import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchSettingsNotificationsPush } from './switchies/SwitchSettingsNotificationsPush'

export const CellSettingsNotificationsPush: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchSettingsNotificationsPush />}>
         Push-уведомления
      </SimpleCell>
   )
}
