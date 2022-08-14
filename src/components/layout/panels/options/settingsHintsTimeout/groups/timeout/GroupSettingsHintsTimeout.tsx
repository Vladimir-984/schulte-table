import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { ListHintsTimeoutItems } from './ListHintsTimeoutItems'

export const GroupSettingsHintsTimeout: React.FC = () => {
   return (
      <GroupCard>
         <ListHintsTimeoutItems />
      </GroupCard>
   )
}
