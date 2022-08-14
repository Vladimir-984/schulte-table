import React from 'react'
import { useRouter } from '@happysanta/router'

import { Group, Panel, PanelHeaderClose, PanelProps } from '@vkontakte/vkui'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupOptionsSettings } from './groups/settings/GroupOptionsSettings'
import { GroupOptionsAbout } from './groups/about/GroupOptionsAbout'

export const PanelOptions: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderClose onClick={onClickBack} />}>Опции</PanelHeaderSeparator>

         <Group>
            <GroupOptionsSettings />
            <GroupOptionsAbout />
         </Group>
      </Panel>
   )
}
