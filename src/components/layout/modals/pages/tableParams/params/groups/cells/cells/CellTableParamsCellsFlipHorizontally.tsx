import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableParamsCellsFlipHorizontally } from './switchies/SwitchTableParamsCellsFlipHorizontally'

export const CellTableParamsCellsFlipHorizontally: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableParamsCellsFlipHorizontally />}>
         Отразить по горизонтали
      </SimpleCell>
   )
}
