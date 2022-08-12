import React from 'react'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { hintsStyleItems } from 'lists/items'
import { createReactKeyIdx, isAddSeparator } from 'utils/list'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { TableHintsStyle } from 'lists'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectHintsStyle } from 'store/selectors/tableSettings'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { setHintsStyle } from 'store/slices/tableSettingsSlice'

export const ListHintsStyleItems: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsStyle = useAppSelector(selectHintsStyle)

   const onClickHintsStyle = (_hintsStyle: TableHintsStyle) => () => {
      dispatch(setHintsStyle(_hintsStyle))
   }

   return (
      <List>
         {hintsStyleItems.map((hintsStyleItem, idx, items) => (
            <React.Fragment key={createReactKeyIdx('hints-style', idx)}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={hintsStyle === hintsStyleItem.value && <Icon28DoneOutline />}
                  onClick={onClickHintsStyle(hintsStyleItem.value)}
               >
                  {hintsStyleItem.label}
               </SimpleCell>

               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
