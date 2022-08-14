import React from 'react'
import { Separator } from '@vkontakte/vkui'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellSettingsNotificationsPush } from './cells/CellSettingsNotificationsPush'
import { CellSettingsNotificationsMessage } from './cells/CellSettingsNotificationsMessage'

export const GroupSettingsNotifications: React.FC = () => {
   return (
      <GroupCard>
         <CellSettingsNotificationsPush />
         <Separator wide />
         <CellSettingsNotificationsMessage />
      </GroupCard>
   )
}
