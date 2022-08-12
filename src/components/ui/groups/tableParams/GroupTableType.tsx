import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Card, CardGrid, Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableType } from 'store/selectors/tableParams'
import { setTableType } from 'store/slices/tablePramsSlice'
import { IListItem } from 'types/list'
import { TableType } from 'types/table'
import { createReactKeyIdx } from 'utils/list'

export const TABLE_TYPE = {
   [TableType.NUMBERS]: 'Цифры',
   [TableType.LATIN]: 'Латиница',
   [TableType.CYRILLIC]: 'Кириллица',
}

export const tableTypeItems: IListItem<TableType>[] = [
   { value: TableType.NUMBERS, label: TABLE_TYPE[TableType.NUMBERS] },
   { value: TableType.LATIN, label: TABLE_TYPE[TableType.LATIN] },
   { value: TableType.CYRILLIC, label: TABLE_TYPE[TableType.CYRILLIC] },
]

export const GroupTableType: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableType = useAppSelector(selectChangeableTableType)

   const onClickTableType = (_tabelType: TableType) => () => {
      if (_tabelType !== tableType) {
         dispatch(setTableType(_tabelType))
      }
   }
   return (
      <Group>
         {tableTypeItems.map((tableTypeItem, idx, items) => (
            <Group
               key={createReactKeyIdx('table-type', idx)}
               mode='plain'
               separator='hide'
               description={tableTypeItem.description}
            >
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={tableType === tableTypeItem.value && <Icon28DoneOutline />}
                        onClick={onClickTableType(tableTypeItem.value)}
                     >
                        {tableTypeItem.label}
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         ))}
      </Group>
   )
}
