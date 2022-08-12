import React from 'react'
import { Card, CardGrid, Group } from '@vkontakte/vkui'
import { CellSettings } from 'components/ui/listCells/options/CellSettings'

export const GroupOptionsSettings: React.FC = () => {
   return (
      <Group separator='hide' mode='plain'>
         <CardGrid size='l'>
            <Card>
               <CellSettings />
            </Card>
         </CardGrid>
      </Group>
   )
}
