import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableDisplayOptionsCellsShadow } from './SwitchTableDisplayOptionsCellsShadow'

export const CellTableDisplayOptionsCellsShadow: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableDisplayOptionsCellsShadow />}>
         Контур ячеек
      </SimpleCell>
   )
}
