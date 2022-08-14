import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsHintsTimeout } from './groups/timeout/GroupSettingsHintsTimeout'

export const PanelSettingsHintsTimeout: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label='Подсказки' />}>
            Тайм-аут
         </PanelHeaderSeparator>
         <Group separator='hide'>
            <GroupSettingsHintsTimeout />
         </Group>
      </Panel>
   )
}
