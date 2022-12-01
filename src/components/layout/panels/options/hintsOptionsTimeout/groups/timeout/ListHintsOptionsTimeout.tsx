import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'

import { isAddSeparator } from 'utils/list'
import { selectChangeableTableHintsTimeout, selectDataTableHintsTimeouts } from 'store/selectors/tableOptions'
import { setHintsTableOptionsTimeout } from 'store/asyncThunks/tableOptions'

export const ListHintsOptionsTimeout: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsTimeout = useAppSelector(selectChangeableTableHintsTimeout)
   const dataHintsTimeouts = useAppSelector(selectDataTableHintsTimeouts)

   const onClickHintTimeout = (_timeout: number) => () => {
      dispatch(setHintsTableOptionsTimeout(_timeout))
   }
   return (
      <List>
         {dataHintsTimeouts.map((hintTimeoutItem, idx, items) => (
            <React.Fragment key={hintTimeoutItem.id}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={hintsTimeout === hintTimeoutItem.value && <Icon28DoneOutline />}
                  onClick={onClickHintTimeout(hintTimeoutItem.value)}
               >
                  {hintTimeoutItem.title}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
