import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableType } from 'store/selectors/tableParams'
import { setTableParamsType } from 'store/slices/tableParamsSlice'
import { TableType } from 'types/table'
import { createReactKeyIdx } from 'utils/list'
import { tableTypeItems } from 'lists/items'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const GroupTableType: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableType = useAppSelector(selectChangeableTableType)

   const onClickTableType = (_tabelType: TableType) => () => {
      if (_tabelType !== tableType) {
         dispatch(setTableParamsType(_tabelType))
      }
   }
   return (
      <Group>
         {tableTypeItems.map((tableTypeItem, idx, items) => (
            <GroupCard key={createReactKeyIdx('table-type', idx)} description={tableTypeItem.description}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableType === tableTypeItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableType(tableTypeItem.value)}
               >
                  {tableTypeItem.label}
               </SimpleCell>
            </GroupCard>
         ))}
      </Group>
   )
}
