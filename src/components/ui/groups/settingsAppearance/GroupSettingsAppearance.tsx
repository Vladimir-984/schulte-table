import React from 'react'
import { Card, CardGrid, Group } from '@vkontakte/vkui'
import { ListAppearanceItems } from 'components/ui/lists/ListAppearanceItems'

export const GroupSettingsAppearance: React.FC = () => {
   return (
      <Group mode='plain' separator='hide'>
         <CardGrid size='l'>
            <Card>
               <ListAppearanceItems />
            </Card>
         </CardGrid>
      </Group>
   )
}
