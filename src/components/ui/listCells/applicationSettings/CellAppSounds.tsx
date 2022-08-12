import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchAppSounds } from 'components/ui/switchies/SwitchAppSounds'

export const CellAppSounds: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchAppSounds />}>
         Звуки
      </SimpleCell>
   )
}
