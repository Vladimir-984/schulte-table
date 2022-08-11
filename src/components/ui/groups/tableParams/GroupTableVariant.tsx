import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Card, CardGrid, Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariant } from 'store/selectors/tableParams'
import { setTableVariant } from 'store/slices/tablePramsSlice'
import { IListItem } from 'types/list'
import { TableVariant } from 'types/table'
import { createReactKeyIdx } from 'utils/list'

export const TABLE_VARIANT = {
   [TableVariant.STANDARD]: 'Стандартный',
   [TableVariant.GORBOV]: 'Шульте-Горбова',
}

export const tableVariantItems: IListItem<TableVariant>[] = [
   { value: TableVariant.STANDARD, label: TABLE_VARIANT[TableVariant.STANDARD] },
   { value: TableVariant.GORBOV, label: TABLE_VARIANT[TableVariant.GORBOV] },
]

export const GroupTableVariant: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableVariant = useAppSelector(selectChangeableTableVariant)

   const onClickTableType = (_tabelVariant: TableVariant) => () => {
      if (_tabelVariant !== tableVariant) {
         dispatch(setTableVariant(_tabelVariant))
      }
   }
   return (
      <Group>
         {tableVariantItems.map((tableVariantItem, idx, items) => (
            <Group
               key={createReactKeyIdx('table-variant', idx)}
               mode='plain'
               separator='hide'
               description={tableVariantItem.description}
            >
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={tableVariant === tableVariantItem.value && <Icon28DoneOutline />}
                        onClick={onClickTableType(tableVariantItem.value)}
                     >
                        {tableVariantItem.label}
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         ))}
      </Group>
   )
}
