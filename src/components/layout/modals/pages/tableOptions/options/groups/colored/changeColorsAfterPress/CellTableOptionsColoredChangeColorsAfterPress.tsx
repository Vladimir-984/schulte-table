import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsColoredChangeColorsAfterPress } from './SwitchTableOptionsColoredChangeColorsAfterPress'

export const CellTableOptionsColoredChangeColorsAfterPress: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsColoredChangeColorsAfterPress />}>
         Менять цвета после нажатия
      </SimpleCell>
   )
}
