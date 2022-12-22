import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsIsShowTableTime } from './SwitchTableOptionsIsShowTableTime'

export const CellTableOptionsIsShowTableTime: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableOptionsIsShowTableTime />}>
         Отображать время таблицы
      </SimpleCell>
   )
}
