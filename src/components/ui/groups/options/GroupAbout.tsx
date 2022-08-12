import React from 'react'
import { Card, CardGrid, Group, Separator } from '@vkontakte/vkui'
import { CellHelp } from 'components/ui/listCells/options/CellHelp'
import { CellAbout } from 'components/ui/listCells/options/CellAbout'

export const GroupAbout: React.FC = () => {
   return (
      <Group separator='hide' mode='plain'>
         <CardGrid size='l'>
            <Card>
               <CellHelp />
               <Separator wide />
               <CellAbout />
            </Card>
         </CardGrid>
      </Group>
   )
}
