import React from 'react'
import { useRouter } from '@happysanta/router'

import { FixedLayout, Group, Panel, PanelHeader, PanelHeaderClose, PanelProps, Separator } from '@vkontakte/vkui'

import { GroupAbout } from 'components/ui/groups/options/GroupAbout'
import { GroupSettings } from 'components/ui/groups/options/GroupSettings'

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
            <GroupSettings />
            <GroupAbout />
         </Group>
      </Panel>
   )
}
