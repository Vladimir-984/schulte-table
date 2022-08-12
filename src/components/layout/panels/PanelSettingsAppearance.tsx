import React from 'react'
import { useRouter } from '@happysanta/router'
import { FixedLayout, Group, Panel, PanelHeader, PanelHeaderBack, PanelProps, Separator } from '@vkontakte/vkui'

import { GroupSettingsAppearance } from 'components/ui/groups/settingsAppearance/GroupSettingsAppearance'

export const PanelSettingsAppearance: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Тема
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group>
            <GroupSettingsAppearance />
         </Group>
      </Panel>
   )
}
