import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableOptionsIsShuffleCells } from './SwitchTableOptionsIsShuffleCells'

export const CellTableOptionsIsShuffleCells: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsIsShuffleCells />}>
         Перемешивать
      </SimpleCell>
   )
}
