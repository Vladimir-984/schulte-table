import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'

export const CellTableOptionsTransformFlipX: React.FC = () => {
   return (
      <SimpleCell disabled after={<Switch />}>
         Отражение по горизонтали
      </SimpleCell>
   )
}
