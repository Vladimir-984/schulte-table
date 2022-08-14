import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableView } from './cells/CellTableView'
import { CellTableHints } from './cells/CellTableHints'
import { CellTableCells } from './cells/CellTableCells'

export const GroupTableSettings: React.FC = () => {
   return (
      <GroupCard header={<Header mode='secondary'>Таблица</Header>}>
         <CellTableView />
         <Separator wide />
         <CellTableHints />
         <Separator wide />
         <CellTableCells />
      </GroupCard>
   )
}
