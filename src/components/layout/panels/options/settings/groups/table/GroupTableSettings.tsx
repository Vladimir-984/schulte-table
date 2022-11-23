import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableDisplay } from './cells/CellTableDisplay'
import { CellTableHints } from './cells/CellTableHints'

export const GroupTableSettings: React.FC = () => {
   return (
      <GroupCard header={<Header mode='secondary'>Таблица</Header>}>
         <CellTableDisplay />
         <Separator wide />
         <CellTableHints />
      </GroupCard>
   )
}
