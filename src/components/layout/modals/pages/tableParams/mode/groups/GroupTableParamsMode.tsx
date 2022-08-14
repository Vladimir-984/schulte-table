import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { TableMode } from 'types/table'
import { createReactKeyIdx } from 'utils/list'
import { setTableMode } from 'store/slices/tableParamsSlice'
import { selectChangeableTableMode } from 'store/selectors/tableParams'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { tableModeItems } from 'lists/items'

export const GroupTableParamsMode: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableMode = useAppSelector(selectChangeableTableMode)

   const onClickTableType = (_tableMode: TableMode) => () => {
      if (_tableMode !== tableMode) {
         dispatch(setTableMode(_tableMode))
      }
   }
   return (
      <>
         {tableModeItems.map((tableModeItem, idx, items) => (
            <GroupCard key={createReactKeyIdx('table-mode', idx)} description={tableModeItem.description}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableMode === tableModeItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableType(tableModeItem.value)}
               >
                  {tableModeItem.label}
               </SimpleCell>
            </GroupCard>
         ))}
      </>
   )
}
