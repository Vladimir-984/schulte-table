import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableParamsCellsFlipVertically } from './switchies/SwitchTableParamsCellsFlipVertically'

export const CellTableParamsCellsFlipVertically: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableParamsCellsFlipVertically />}>
         Отразить по вертикали
      </SimpleCell>
   )
}
