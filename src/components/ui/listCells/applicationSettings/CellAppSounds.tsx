import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'

export const CellAppSounds: React.FC = () => {
   return (
      <SimpleCell disabled after={<Switch />}>
         Звуки
      </SimpleCell>
   )
}
