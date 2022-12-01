import React from 'react'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { isAddSeparator } from 'utils/list'
import { Icon28DoneOutline } from '@vkontakte/icons'

import { useAppDispatch, useAppSelector } from 'hooks/redux'

import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { selectChangeableTableHintsStyle, selectDataTableHintsStyles } from 'store/selectors/tableOptions'
import { setHintsTableOptionsStyle } from 'store/asyncThunks/tableOptions'
import { ITableHintStyle } from 'types/table'

export const ListHintsOptionsStyle: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsStyle = useAppSelector(selectChangeableTableHintsStyle)
   const dataHintsStyles = useAppSelector(selectDataTableHintsStyles)

   const onClickHintsStyle = (_hintsStyle: ITableHintStyle) => () => {
      dispatch(setHintsTableOptionsStyle(_hintsStyle))
   }

   return (
      <List>
         {dataHintsStyles.map((hintsStyleItem, idx, items) => (
            <React.Fragment key={hintsStyleItem.id}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={hintsStyle.id === hintsStyleItem.id && <Icon28DoneOutline />}
                  onClick={onClickHintsStyle(hintsStyleItem)}
               >
                  {hintsStyleItem.title}
               </SimpleCell>

               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
