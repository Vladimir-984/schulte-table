import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'

export const CellTableOptionsTransformTurn: React.FC = () => {
   return (
      <SimpleCell disabled after={<Switch />}>
         Поворот
      </SimpleCell>
   )
}
