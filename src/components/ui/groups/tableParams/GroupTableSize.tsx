import React from 'react'
import { Card, CardGrid, Group, Separator, SimpleCell } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAvailableTableSizes, selectChangeableTableSize } from 'store/selectors/tableParams'
import { createReactKeyIdx, isAddSeparator } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { setTableSize } from 'store/slices/tablePramsSlice'

export const GroupTableSize: React.FC = () => {
   const dispatch = useAppDispatch()

   const availableSizes = useAppSelector(selectAvailableTableSizes)
   const tableSize = useAppSelector(selectChangeableTableSize)

   const onClickTableSize = (_tableSize: number) => () => {
      dispatch(setTableSize(_tableSize))
   }

   return (
      <Group>
         <Group mode='plain' separator='hide' description='какое-то описание'>
            <CardGrid size='l'>
               <Card>
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
               </Card>
            </CardGrid>
         </Group>
      </Group>
   )
}
