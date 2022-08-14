import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchSettingsCellsShowMistakes } from './switchies/SwitchSettingsCellsShowMistakes'

export const CellSettingsCellsShowMistakes: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchSettingsCellsShowMistakes />}>
         Показывать ошибки
      </SimpleCell>
   )
}
