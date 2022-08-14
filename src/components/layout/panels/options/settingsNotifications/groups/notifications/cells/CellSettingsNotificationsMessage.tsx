import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchSettingsNotificationsMessage } from './switchies/SwitchSettingsNotificationsMessage'

export const CellSettingsNotificationsMessage: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchSettingsNotificationsMessage />}>
         Сообщения
      </SimpleCell>
   )
}
