import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'
import { CellTableSize } from 'components/ui/cells/CellTableSize'
import { CellTableTypeSequence } from 'components/ui/cells/CellTableTypeSequence'

export const GroupOtherTableParams: React.FC = () => {
   return (
      <Group mode='plain' separator='hide' header={<Header mode='secondary'>Заголовок</Header>}>
         <CardGrid size='l'>
            <Card>
               <CellTableSize />
               <Separator wide />
               <CellTableTypeSequence />
            </Card>
         </CardGrid>
      </Group>
   )
}
