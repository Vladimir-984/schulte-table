import React from 'react'
import { Separator } from '@vkontakte/vkui'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellHelp } from './cells/CellHelp'
import { CellAbout } from './cells/CellAbout'

export const GroupOptionsAbout: React.FC = () => {
   return (
      <GroupCard>
         <CellHelp />
         <Separator wide />
         <CellAbout />
      </GroupCard>
   )
}
