import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsAdditionallyColoredCells } from './SwitchTableOptionsAdditionallyColoredCells'

export const CellTableOptionsAdditionallyColoredCells: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsAdditionallyColoredCells />}>
         Цветные ячейки
      </SimpleCell>
   )
}
