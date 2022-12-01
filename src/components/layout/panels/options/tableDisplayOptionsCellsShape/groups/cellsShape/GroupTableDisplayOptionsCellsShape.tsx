import React from 'react'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { ListTableDisplayOptionsCellsShape } from './ListTableDisplayOptionsCellsShape'

export const GroupTableDisplayOptionsCellsShape: React.FC = () => {
   return (
      <GroupCard>
         <ListTableDisplayOptionsCellsShape />
      </GroupCard>
   )
}
