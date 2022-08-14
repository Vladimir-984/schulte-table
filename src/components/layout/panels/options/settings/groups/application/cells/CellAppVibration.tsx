import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchAppVibration } from './switchies/SwitchAppVibration'

export const CellAppVibration: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchAppVibration />}>
         Вибрация
      </SimpleCell>
   )
}
