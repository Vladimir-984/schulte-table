import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsAdditionallyColoredSymbols } from './SwitchTableOptionsAdditionallyColoredSymbols'

export const CellTableOptionsAdditionallyColoredSymbols: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsAdditionallyColoredSymbols />}>
         Цветные символы
      </SimpleCell>
   )
}
