import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchAppSounds } from './switchies/SwitchAppSounds'

export const CellAppSounds: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchAppSounds />}>
         Звуки
      </SimpleCell>
   )
}
