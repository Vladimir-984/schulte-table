import React from 'react'
import { useRouter } from '@happysanta/router'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'

import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsNotifications } from './groups/notifications/GroupSettingsNotifications'

export const PanelSettingsNotifications: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'Настройки'} />}>
            Уведомления
         </PanelHeaderSeparator>

         <Group separator='hide'>
            <GroupSettingsNotifications />
         </Group>
      </Panel>
   )
}
