import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { SwitchTableOptionsUpdateColorsAfterSelect } from './SwitchTableOptionsUpdateColorsAfterSelect'
import { useAppSelector } from 'hooks/redux'
import { selectIsDisabledChangeUpdateColorsAfterSelect } from 'store/selectors/tableOptions'

export const CellTableOptionsUpdateColorsAfterSelect: React.FC = () => {
   const isDisabledChangeUpdateColorsAfterSelect = useAppSelector(selectIsDisabledChangeUpdateColorsAfterSelect)
   return (
      <SimpleCell
         disabled
         subtitle={isDisabledChangeUpdateColorsAfterSelect && 'Недоступно'}
         after={<SwitchTableOptionsUpdateColorsAfterSelect />}
      >
         Обновлять цвета после выбора
      </SimpleCell>
   )
}
