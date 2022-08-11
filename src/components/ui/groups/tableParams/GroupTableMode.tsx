import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Card, CardGrid, Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { IListItem } from 'types/list'
import { TableMode } from 'types/table'
import { createReactKeyIdx } from 'utils/list'
import { setTableMode } from 'store/slices/tablePramsSlice'
import { selectChangeableTableMode } from 'store/selectors/tableParams'

export const TABLE_MODE = {
   [TableMode.CLASSIC]: 'Классический',
   [TableMode.CUSTOM]: 'Настраиваемый',
   [TableMode.HARD]: 'Сложный',
}

export const tableModeItems: IListItem<TableMode>[] = [
   { value: TableMode.CLASSIC, label: TABLE_MODE[TableMode.CLASSIC], description: '' },
   { value: TableMode.CUSTOM, label: TABLE_MODE[TableMode.CUSTOM], description: '' },
   { value: TableMode.HARD, label: TABLE_MODE[TableMode.HARD], description: '' },
]

export const GroupTableMode: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableMode = useAppSelector(selectChangeableTableMode)

   const onClickTableType = (_tableMode: TableMode) => () => {
      if (_tableMode !== tableMode) {
         dispatch(setTableMode(_tableMode))
      }
   }
   return (
      <Group>
         {tableModeItems.map((tableModeItem, idx, items) => (
            <Group
               key={createReactKeyIdx('table-mode', idx)}
               mode='plain'
               separator='hide'
               description={tableModeItem.description}
            >
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={tableMode === tableModeItem.value && <Icon28DoneOutline />}
                        onClick={onClickTableType(tableModeItem.value)}
                     >
                        {tableModeItem.label}
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         ))}
      </Group>
   )
}
