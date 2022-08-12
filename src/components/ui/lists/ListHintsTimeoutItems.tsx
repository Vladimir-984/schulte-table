import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { hintsTimeoutItems } from 'lists/items'
import { selectHintsTimeout } from 'store/selectors/tableSettings'
import { setHintsTimeout } from 'store/slices/tableSettingsSlice'

import { createReactKeyIdx, isAddSeparator } from 'utils/list'

export const ListHintsTimeoutItems: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsTimeout = useAppSelector(selectHintsTimeout)

   const onCluckHintTimeout = (_timeout: number) => () => {
      dispatch(setHintsTimeout(_timeout))
   }
   return (
      <List>
         {hintsTimeoutItems.map((hintTimeoutItem, idx, items) => (
            <React.Fragment key={createReactKeyIdx('hints-timeout', idx)}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={hintsTimeout === hintTimeoutItem.value && <Icon28DoneOutline />}
                  onClick={onCluckHintTimeout(hintTimeoutItem.value)}
               >
                  {hintTimeoutItem.label}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
