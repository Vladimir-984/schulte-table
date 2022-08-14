import React from 'react'
import { ListHintsStyleItems } from './ListHintsStyleItems'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const GroupSettingsHintsStyle: React.FC = () => {
   return (
      <GroupCard>
         <ListHintsStyleItems />
      </GroupCard>
   )
}
