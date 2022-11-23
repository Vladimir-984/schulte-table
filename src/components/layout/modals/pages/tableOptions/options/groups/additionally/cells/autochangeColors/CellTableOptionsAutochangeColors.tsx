import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsAutochangeColors } from './SwitchTableOptionsAutochangeColors'

export const CellTableOptionsAutochangeColors: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsAutochangeColors />}>
         Автосмена цветов
      </SimpleCell>
   )
}
