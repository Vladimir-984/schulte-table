import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableHintsActive } from 'components/ui/switchies/SwitchTableHintsActive'

export const CellSettingsHintsActive: React.FC = () => {
   return (
      <SimpleCell disabled after={<SwitchTableHintsActive />}>
         Подсказки
      </SimpleCell>
   )
}
