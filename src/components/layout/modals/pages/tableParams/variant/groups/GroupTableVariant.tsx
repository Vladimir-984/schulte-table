import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Group, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariant } from 'store/selectors/tableParams'
import { setTableVariant } from 'store/slices/tableParamsSlice'
import { TableVariant } from 'types/table'
import { createReactKeyIdx } from 'utils/list'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { tableVariantItems } from 'lists/items'

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
            <GroupCard key={createReactKeyIdx('table-variant', idx)} description={tableVariantItem.description}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableVariant === tableVariantItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableType(tableVariantItem.value)}
               >
                  {tableVariantItem.label}
               </SimpleCell>
            </GroupCard>
         ))}
      </Group>
   )
}
