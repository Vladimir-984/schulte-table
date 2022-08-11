import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'
import { CellTableShuffleCells } from 'components/ui/cells/CellTableShuffleCells'
import { CellTableFlipHorizontallyCell } from 'components/ui/cells/CellTableFlipHorizontallyCell'
import { CellTableFlipVerticallyCell } from 'components/ui/cells/CellTableFlipVerticallyCell'

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
