import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariant, selectDataTableVariant } from 'store/selectors/tableOptions'
import { setMainTableOptionsVariant } from 'store/slices/tableOptions'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { ITableVariant } from 'types/table'

export const GroupTableVariant: React.FC = () => {
   const dispatch = useAppDispatch()

   const tableVariant = useAppSelector(selectChangeableTableVariant)
   const dataTableVariants = useAppSelector(selectDataTableVariant)

   const onClickTableType = (_tabelVariant: ITableVariant['id']) => () => {
      if (_tabelVariant !== tableVariant.id) {
         dispatch(setMainTableOptionsVariant(_tabelVariant))
      }
   }
   return (
      <Group>
         {dataTableVariants.map((tableVariantItem) => (
            <GroupCard key={tableVariantItem.id} description={tableVariantItem.description}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableVariant.id === tableVariantItem.id && <Icon28DoneOutline />}
                  onClick={onClickTableType(tableVariantItem.id)}
               >
                  {tableVariantItem.title}
               </SimpleCell>
            </GroupCard>
         ))}
      </Group>
   )
}
