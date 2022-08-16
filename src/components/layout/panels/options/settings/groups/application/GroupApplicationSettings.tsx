import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellAppSound } from './cells/CellAppSound'
import { CellAppVibration } from './cells/CellAppVibration'
import { CellAppAppearance } from './cells/CellAppAppearance'
import { CellAppNotifications } from './cells/CellAppNotifications'

export const GroupApplicationSettings: React.FC = () => {
   return (
      <GroupCard header={<Header mode='secondary'>Приложение</Header>}>
         <CellAppSound />
         <Separator wide />
         <CellAppVibration />
         <Separator wide />
         <CellAppAppearance />
         <Separator wide />
         <CellAppNotifications />
      </GroupCard>
   )
}
