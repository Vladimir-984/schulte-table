import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'
import { CellTableSize } from 'components/ui/listCells/CellTableSize'
import { CellTableTypeSequence } from 'components/ui/listCells/CellTableTypeSequence'
import { TABLE_VARIANT } from './GroupTableVariant'
import { TableVariant } from 'types/table'

export const GroupOtherTableParams: React.FC = () => {
   return (
      <Group
         mode='plain'
         separator='hide'
         header={<Header mode='secondary'>Дополнительно</Header>}
         description={`Изменение порядка недоступно для варианта - "${TABLE_VARIANT[TableVariant.GORBOV]}"`}
      >
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
