import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'

import { CellTableType } from 'components/ui/cells/CellTableType'
import { CellTableVariant } from 'components/ui/cells/CellTableVariant'
import { CellTableMode } from 'components/ui/cells/CellTableMode'

export const GroupMainTableParams: React.FC = () => {
   return (
      <Group mode='plain' separator='hide' header={<Header mode='secondary'>Основные</Header>}>
         <CardGrid size='l'>
            <Card>
               <CellTableType />
               <Separator wide />
               <CellTableVariant />
               <Separator wide />
               <CellTableMode />
            </Card>
         </CardGrid>
      </Group>
   )
}
