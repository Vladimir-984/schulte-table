import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableOptionsCellsShuffle } from './SwitchTableOptionsCellsShuffle'

export const CellTableOptionsCellsShuffle: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsCellsShuffle />}>
         Перемешивать после нажатия
      </SimpleCell>
   )
}
