import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsIsShowCurrentSymbol } from './SwitchTableOptionsIsShowCurrentSymbol'

export const CellTableOptionsIsShowCurrentSymbol: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsIsShowCurrentSymbol />}>
         Отображать текущий символ
      </SimpleCell>
   )
}
