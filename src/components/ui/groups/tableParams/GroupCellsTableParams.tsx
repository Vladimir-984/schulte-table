import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'
import { CellTableShuffleCells } from 'components/ui/listCells/CellTableShuffleCells'
import { CellTableFlipHorizontallyCell } from 'components/ui/listCells/CellTableFlipHorizontallyCell'
import { CellTableFlipVerticallyCell } from 'components/ui/listCells/CellTableFlipVerticallyCell'

export const GroupCellsTableParams: React.FC = () => {
   return (
      <Group mode='plain' separator='hide' header={<Header mode='secondary'>Ячейки</Header>}>
         <CardGrid size='l'>
            <Card>
               <CellTableShuffleCells />
               <Separator wide />
               <CellTableFlipHorizontallyCell />
               <Separator wide />
               <CellTableFlipVerticallyCell />
            </Card>
         </CardGrid>
      </Group>
   )
}
