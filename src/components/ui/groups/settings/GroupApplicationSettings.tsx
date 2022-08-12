import React from 'react'
import { Card, CardGrid, Group, Header, Separator } from '@vkontakte/vkui'
import { CellAppAppearance } from 'components/ui/listCells/applicationSettings/CellAppAppearance'
import { CellAppNotifications } from 'components/ui/listCells/applicationSettings/CellAppNotifications'
import { CellAppSounds } from 'components/ui/listCells/applicationSettings/CellAppSounds'
import { CellAppVibration } from 'components/ui/listCells/applicationSettings/CellAppVibration'

export const GroupApplicationSettings: React.FC = () => {
   return (
      <Group separator='hide' mode='plain' header={<Header mode='secondary'>Приложение</Header>}>
         <CardGrid size='l'>
            <Card>
               <CellAppSounds />
               <Separator wide />
               <CellAppVibration />
               <Separator wide />
               <CellAppAppearance />
               <Separator wide />
               <CellAppNotifications />
            </Card>
         </CardGrid>
      </Group>
   )
}
