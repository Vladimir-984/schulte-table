import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsAutoChangeColors } from './SwitchTableOptionsAutoChangeColors'

export const CellTableOptionsAutoChangeColors: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsAutoChangeColors />}>
         Автосмена цветов
      </SimpleCell>
   )
}
