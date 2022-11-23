import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsAdditionallyChangeColorsAfterPress } from './SwitchTableOptionsAdditionallyChangeColorsAfterPress'

export const CellTableOptionsAdditionallyChangeColorsAfterPress: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsAdditionallyChangeColorsAfterPress />}>
         Менять цвета после нажатия
      </SimpleCell>
   )
}
