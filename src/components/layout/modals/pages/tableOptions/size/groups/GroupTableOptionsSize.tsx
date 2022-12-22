import React from 'react'
import { Separator, SimpleCell } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAvailableTableSizes, selectChangeableTableSize } from 'store/selectors/tableOptions'
import { createReactKeyIdx, isAddSeparator } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { setTableOptionsSize } from 'store/slices/tableOptions'

export const GroupTableOptionsSize: React.FC = () => {
   const dispatch = useAppDispatch()

   const availableSizes = useAppSelector(selectAvailableTableSizes)
   const tableSize = useAppSelector(selectChangeableTableSize)

   const onClickTableSize = (_tableSize: number) => () => {
      // dispatch(setTableOptionsSize(_tableSize))
   }

   return (
      <GroupCard description='Какое-то описание. Наверное'>
         {availableSizes.map((sizeItem, idx, items) => (
            <React.Fragment key={createReactKeyIdx('table-size', idx)}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  // after={tableSize === sizeItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableSize(sizeItem.value)}
               >
                  {/* {sizeItem.label} */}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </GroupCard>
   )
}
