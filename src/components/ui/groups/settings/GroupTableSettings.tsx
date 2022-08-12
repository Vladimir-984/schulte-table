import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'
import { CellTableHints } from 'components/ui/listCells/tableSettings/CellTableHints'
import { CellTableCells } from 'components/ui/listCells/tableSettings/CellTableCells'
import { CellTableView } from 'components/ui/listCells/tableSettings/CellTableView'

export const GroupTableSettings: React.FC = () => {
   return (
      <Group separator='hide' mode='plain' header={<Header mode='secondary'>Таблица</Header>}>
         <CardGrid size='l'>
            <Card>
               <CellTableView />
               <Separator wide />
               <CellTableHints />
               <Separator wide />
               <CellTableCells />
            </Card>
         </CardGrid>
      </Group>
   )
}
