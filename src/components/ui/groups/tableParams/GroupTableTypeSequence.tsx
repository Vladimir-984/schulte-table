import React from 'react'
import { Card, CardGrid, Group, SimpleCell } from '@vkontakte/vkui'
import { TableTypeSequence } from 'types/table'
import { IListItem } from 'types/list'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableTypeSequence } from 'store/selectors/tableParams'
import { createReactKeyIdx } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { setTableTypeSequence } from 'store/slices/tablePramsSlice'

export const TABLE_TYPE_SEQUENCE = {
   [TableTypeSequence.DEFAULT]: 'По умолчанию',
   [TableTypeSequence.RANDOM]: 'Случайный',
   [TableTypeSequence.RIGHT]: 'Обратный',
}

export const tableTypeSequenceItems: IListItem<TableTypeSequence>[] = [
   { value: TableTypeSequence.DEFAULT, label: TABLE_TYPE_SEQUENCE[TableTypeSequence.DEFAULT], description: 'desc' },
   { value: TableTypeSequence.RANDOM, label: TABLE_TYPE_SEQUENCE[TableTypeSequence.RANDOM], description: 'desc' },
   { value: TableTypeSequence.RIGHT, label: TABLE_TYPE_SEQUENCE[TableTypeSequence.RIGHT], description: 'desc' },
]

export const GroupTableTypeSequence: React.FC = () => {
   const dispatch = useAppDispatch()
   const tableTypeSequence = useAppSelector(selectChangeableTableTypeSequence)

   const onClickTableTypeSequence = (_tableTypeSequence: TableTypeSequence) => () => {
      dispatch(setTableTypeSequence(_tableTypeSequence))
   }
   return (
      <Group>
         {tableTypeSequenceItems.map((tableTypeSequenceItem, idx, items) => (
            <Group
               key={createReactKeyIdx('table-type-sequence', idx)}
               mode='plain'
               separator='hide'
               description={tableTypeSequenceItem.description}
            >
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={tableTypeSequence === tableTypeSequenceItem.value && <Icon28DoneOutline />}
                        onClick={onClickTableTypeSequence(tableTypeSequenceItem.value)}
                     >
                        {tableTypeSequenceItem.label}
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         ))}
      </Group>
   )
}
