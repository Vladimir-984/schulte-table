import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setMainTableOptionsMode } from 'store/slices/tableOptions'
import { selectChangeableTableMode, selectDataTableMode } from 'store/selectors/tableOptions'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { ITableMode } from 'types/table'

export const GroupTableOptionsMode: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableMode = useAppSelector(selectChangeableTableMode)
   const dataTableModes = useAppSelector(selectDataTableMode)

   const onClickTableType = (_tableMode: ITableMode) => () => {
      dispatch(setMainTableOptionsMode(_tableMode))
   }
   return (
      <>
         {dataTableModes.map((tableModeItem, idx) => (
            <GroupCard key={tableModeItem.id} description={tableModeItem.description}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableMode.id === tableModeItem.id && <Icon28DoneOutline />}
                  onClick={onClickTableType(tableModeItem)}
               >
                  {tableModeItem.title}
               </SimpleCell>
            </GroupCard>
         ))}
      </>
   )
}
