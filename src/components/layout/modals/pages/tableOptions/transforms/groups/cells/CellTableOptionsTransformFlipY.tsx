import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'

export const CellTableOptionsTransformFlipY: React.FC = () => {
   return (
      <SimpleCell disabled after={<Switch />}>
         Отражение по вертикали
      </SimpleCell>
   )
}
