import React from 'react'
import { Card, CardGrid, Group } from '@vkontakte/vkui'
import { CellSettingsHintsActive } from 'components/ui/listCells/settingsHints/CellSettingsHintsActive'

export const GroupSettingsHintsActive: React.FC = () => {
   return (
      <Group
         mode='plain'
         separator='hide'
         description='Если вы испытываете трудности с поиском символов, вы можете включить подсказки'
      >
         <CardGrid size='l'>
            <Card>
               <CellSettingsHintsActive />
            </Card>
         </CardGrid>
      </Group>
   )
}
