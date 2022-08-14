import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'

import { SwitchTableParamsCellsShuffle } from './switchies/SwitchTableParamsCellsShuffle'

export const CellTableParamsCellsShuffle: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableParamsCellsShuffle />}>
         Перемешивать
      </SimpleCell>
   )
}
