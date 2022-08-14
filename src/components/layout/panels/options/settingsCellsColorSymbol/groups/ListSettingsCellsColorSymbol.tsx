import React from 'react'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { tableColorItems } from 'lists/items'
import { createReactKeyIdx, isAddSeparator } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectColorSymbol } from 'store/selectors/tableSettings'
import { TableColor } from 'types/table'
import { setColorSymbol } from 'store/slices/tableSettingsSlice'

export const ListSettingsCellsColorSymbol: React.FC = () => {
   const dispatch = useAppDispatch()
   const colorSymbol = useAppSelector(selectColorSymbol)

   const onClickTableColorItem = (_color: TableColor) => () => {
      dispatch(setColorSymbol(_color))
   }

   return (
      <List>
         {tableColorItems.map((tableColorItem, idx, items) => (
            <React.Fragment key={createReactKeyIdx('table-color', idx)}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={colorSymbol === tableColorItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableColorItem(tableColorItem.value)}
               >
                  {tableColorItem.label}
               </SimpleCell>

               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
