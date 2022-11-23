import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableOptionsCellsFlipHorizontally } from './SwitchTableOptionsCellsFlipHorizontally'

export const CellTableOptionsCellsFlipHorizontally: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsCellsFlipHorizontally />}>
         Отразить по горизонтали
      </SimpleCell>
   )
}
