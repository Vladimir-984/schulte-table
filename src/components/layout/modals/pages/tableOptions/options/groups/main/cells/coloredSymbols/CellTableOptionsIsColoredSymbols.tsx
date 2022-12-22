import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsIsColoredSymbols } from './SwitchTableOptionsIsColoredSymbols'

export const CellTableOptionsIsColoredSymbols: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsIsColoredSymbols />}>
         Цветные символы
      </SimpleCell>
   )
}
