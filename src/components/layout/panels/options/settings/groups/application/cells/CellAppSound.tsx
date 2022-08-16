import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchAppSound } from './switchies/SwitchAppSound'

export const CellAppSound: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchAppSound />}>
         Звук
      </SimpleCell>
   )
}
