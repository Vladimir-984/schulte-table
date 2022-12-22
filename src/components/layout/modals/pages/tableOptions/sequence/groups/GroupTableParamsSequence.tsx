import React from 'react'
import { Group, SimpleCell } from '@vkontakte/vkui'

import { useAppDispatch, useAppSelector } from 'hooks/redux'

import { createReactKeyIdx } from 'utils/list'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const GroupTableParamsSequence: React.FC = () => {
   return <></>
   /*    const dispatch = useAppDispatch()
   const tableSequence = useAppSelector(selectChangeableTableSequence)

   const onClickTableTypeSequence = (_tableSequence: TableSequence) => () => {
      dispatch(setTableParamsSequence(_tableSequence))
   }
   return (
      <Group>
         {tableSequenceItems.map((tableSequenceItem, idx, items) => (
            <GroupCard key={createReactKeyIdx('table-type-sequence', idx)} description={tableSequenceItem.description}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={tableSequence === tableSequenceItem.value && <Icon28DoneOutline />}
                  onClick={onClickTableTypeSequence(tableSequenceItem.value)}
               >
                  {tableSequenceItem.label}
               </SimpleCell>
            </GroupCard>
         ))}
      </Group>
   ) */
}
