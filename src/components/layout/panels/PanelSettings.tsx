import React from 'react'
import { useRouter } from '@happysanta/router'
import { FixedLayout, Group, Panel, PanelHeader, PanelHeaderBack, PanelProps, Separator } from '@vkontakte/vkui'

import { GroupApplicationSettings } from 'components/ui/groups/settings/GroupApplicationSettings'
import { GroupTableSettings } from 'components/ui/groups/settings/GroupTableSettings'

export const PanelSettings: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Настройки
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <GroupApplicationSettings />
            <GroupTableSettings />
         </Group>
      </Panel>
   )
}
