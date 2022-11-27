import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsAdditionallyHideSelected } from './SwitchTableOptionsAdditionallyHideSelected'

export const CellTableOptionsAdditionallyHideSelected: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsAdditionallyHideSelected />}>
         Скрывать выбранные символы
      </SimpleCell>
   )
}
