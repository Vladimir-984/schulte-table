import React from 'react'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { appearanceItems } from 'lists/items'
import { createReactKeyIdx, isAddSeparator } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'

import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setAppearance } from 'store/asyncThunks/application'
import { TypeApplicationAppearance } from 'store/slices/applicationSlice'

import { selectAppAppearanceType } from 'store/selectors/application'

// TODO Причесать лист. Не нравится
export const ListAppearanceItems: React.FC = () => {
   const dispatch = useAppDispatch()

   const appearanceType = useAppSelector(selectAppAppearanceType)

   const onClickAppearance = (_appearanceType: TypeApplicationAppearance) => () => {
      dispatch(setAppearance(_appearanceType))
   }

   return (
      <List>
         {appearanceItems.map((appearanceItem, idx, items) => (
            <React.Fragment key={createReactKeyIdx('appearance', idx)}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={appearanceType === appearanceItem.value && <Icon28DoneOutline />}
                  onClick={onClickAppearance(appearanceItem.value)}
               >
                  {appearanceItem.label}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
