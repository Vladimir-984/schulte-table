import React from 'react'
import { useRouter } from '@happysanta/router'

import { FixedLayout, Group, Panel, PanelHeader, PanelHeaderClose, PanelProps, Separator } from '@vkontakte/vkui'

import { GroupOptionsAbout } from 'components/ui/groups/options/GroupOptionsAbout'
import { GroupOptionsSettings } from 'components/ui/groups/options/GroupOptionsSettings'

export const PanelOptions: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderClose onClick={onClickBack} />} separator={false}>
            Опции
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group>
            <GroupOptionsSettings />
            <GroupOptionsAbout />
         </Group>
      </Panel>
   )
}
