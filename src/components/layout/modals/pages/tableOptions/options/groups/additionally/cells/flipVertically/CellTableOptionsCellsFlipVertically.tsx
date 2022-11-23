import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableOptionsCellsFlipVertically } from './SwitchTableOptionsCellsFlipVertically'

export const CellTableOptionsCellsFlipVertically: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsCellsFlipVertically />}>
         Отразить по вертикали
      </SimpleCell>
   )
}
