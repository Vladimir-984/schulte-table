import React from 'react'
import { Separator, SimpleCell } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAvailableTableSizes, selectChangeableTableSize } from 'store/selectors/tableParams'
import { createReactKeyIdx, isAddSeparator } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { setTableParamsSize } from 'store/slices/tableParamsSlice'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const GroupTableParamsSize: React.FC = () => {
   const dispatch = useAppDispatch()

   const availableSizes = useAppSelector(selectAvailableTableSizes)
   const tableSize = useAppSelector(selectChangeableTableSize)

   const onClickTableSize = (_tableSize: number) => () => {
      dispatch(setTableParamsSize(_tableSize))
   }

   return (
      <GroupCard description='какое-то описание'>
         {availableSizes.map((sizeItem, idx, items) => (
            <React.Fragment key={createReactKeyIdx('table-size', idx)}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableSize === sizeItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableSize(sizeItem.value)}
               >
                  {sizeItem.label}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </GroupCard>
   )
}
