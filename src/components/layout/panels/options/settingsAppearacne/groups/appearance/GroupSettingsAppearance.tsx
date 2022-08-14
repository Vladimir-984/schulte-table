import React from 'react'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { ListAppearanceItems } from './ListAppearanceItems'

export const GroupSettingsAppearance: React.FC = () => {
   return (
      <GroupCard>
         <ListAppearanceItems />
      </GroupCard>
   )
}
