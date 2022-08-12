import React from 'react'
import { Card, CardGrid, Group } from '@vkontakte/vkui'
import { ListHintsStyleItems } from 'components/ui/lists/ListHintsStyleItems'

export const GroupSettingsHintsStyle: React.FC = () => {
   return (
      <Group mode='plain' separator='hide'>
         <CardGrid size='l'>
            <Card>
               <ListHintsStyleItems />
            </Card>
         </CardGrid>
      </Group>
   )
}
