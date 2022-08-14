import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchSettingsCellsMarkSelected } from './switchies/SwitchSettingsCellsMarkSelected'

export const CellSettingsCellsMarkSelected: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchSettingsCellsMarkSelected />}>
         Помечать выбранные
      </SimpleCell>
   )
}
