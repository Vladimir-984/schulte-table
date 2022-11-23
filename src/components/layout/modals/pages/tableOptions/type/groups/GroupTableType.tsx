import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableType, selectDataTableType } from 'store/selectors/tableOptions'
import { setMainTableOptionsType } from 'store/slices/tableOptions'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { ITableType } from 'types/table'

export const GroupTableType: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableType = useAppSelector(selectChangeableTableType)
   const dataTableTypes = useAppSelector(selectDataTableType)

   const onClickTableType = (_tabelType: ITableType['id']) => () => {
      if (_tabelType !== tableType.id) {
         dispatch(setMainTableOptionsType(_tabelType))
      }
   }
   return (
      <Group>
         {dataTableTypes.map((tableTypeItem, idx, items) => (
            <GroupCard key={tableTypeItem.id}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableType.id === tableTypeItem.id && <Icon28DoneOutline />}
                  onClick={onClickTableType(tableTypeItem.id)}
               >
                  {tableTypeItem.title}
               </SimpleCell>
            </GroupCard>
         ))}
      </Group>
   )
}
