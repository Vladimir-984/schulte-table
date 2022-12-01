import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { SwitchTableDisplayOptionsTime } from './SwitchTableDisplayOptionsTime'

export const GroupTableDisplayOptionsTime: React.FC = () => {
   return (
      <GroupCard>
         <SimpleCell disabled after={<SwitchTableDisplayOptionsTime />}>
            Время
         </SimpleCell>
      </GroupCard>
   )
}
