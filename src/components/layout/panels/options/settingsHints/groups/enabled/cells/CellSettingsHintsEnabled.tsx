import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchSettingsHintsEnabled } from './switchies/SwitchSettingsHintsEnabled'

export const CellSettingsHintsEnabled: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchSettingsHintsEnabled />}>
         Подсказки
      </SimpleCell>
   )
}
