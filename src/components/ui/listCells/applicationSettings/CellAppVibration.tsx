import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'

export const CellAppVibration: React.FC = () => {
   return (
      <SimpleCell disabled after={<Switch />}>
         Вибрация
      </SimpleCell>
   )
}
