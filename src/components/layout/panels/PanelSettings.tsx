import React from 'react'
import { useRouter } from '@happysanta/router'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'

import { GroupApplicationSettings } from 'components/ui/groups/settings/GroupApplicationSettings'
import { GroupTableSettings } from 'components/ui/groups/settings/GroupTableSettings'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'

export const PanelSettings: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'Опции'} />}>
            Настройки
         </PanelHeaderSeparator>

         <Group separator='hide'>
            <GroupApplicationSettings />
            <GroupTableSettings />
         </Group>
      </Panel>
   )
}
