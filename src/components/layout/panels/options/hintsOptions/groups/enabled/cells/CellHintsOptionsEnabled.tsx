import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchHintsOptionsEnabled } from './switchies/SwitchHintsOptionsEnabled'

export const CellHintsOptionsEnabled: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchHintsOptionsEnabled />}>
         Подсказки
      </SimpleCell>
   )
}
